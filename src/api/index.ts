import { ponder } from "@/generated";
import { graphql } from "@ponder/core";

const questDbMap = {
  "THJ 101": "THJ101Guide",
  "Ours de la Renaissance": "SuccessMint",
  "The Revenge of the Bullas": "BullasMint",
  "Henlo 6/9": "HenloMint",
  "Jani Love Eggs": "EggsMint",
  "Run It Back Turbo": "TurboQuest",
  "Class Is In Session": "HookedMint",
};

const getQuestResult = async (
  db: any,
  questName: string,
  address?: string,
  options?: {
    limit?: number;
    before?: string;
    after?: string;
  }
) => {
  const dbName = questDbMap[questName as keyof typeof questDbMap];
  if (!dbName) {
    throw new Error("Invalid quest name");
  }

  if (address) {
    return await db[dbName].findUnique({ id: address });
  } else {
    const { limit = 50, before, after } = options || {};
    return await db[dbName].findMany({
      where: {},
      orderBy: { id: "asc" },
      limit: Math.min(limit, 1000),
      ...(before && { before }),
      ...(after && { after }),
    });
  }
};

ponder.get("/quest", async (c) => {
  const db = c.get("db");
  const questName = c.req.query("name");
  const address = c.req.query("address");

  console.log(questName, address);

  if (!questName || !address) {
    return c.json({ error: "Quest name and address are required" }, 400);
  }

  try {
    const result = await getQuestResult(db, questName, address);
    console.log(result);

    return c.json({
      quantity: Number(result?.quantity),
      minted: result?.minted,
      swapped: result?.swapped,
    });
  } catch (error) {
    return c.json({ error: (error as Error).message }, 400);
  }
});

ponder.get("/quest/:questName", async (c) => {
  const db = c.get("db");
  const questName = c.req.param("questName");
  const limit = Number(c.req.query("limit")) || 50;
  const before = c.req.query("before");
  const after = c.req.query("after");

  if (!questName) {
    return c.json({ error: "Quest name is required" }, 400);
  }

  try {
    const results = await getQuestResult(db, questName, undefined, {
      limit,
      before,
      after,
    });

    console.log(results);

    const lastItem = results[results.length - 1];
    const nextCursor = lastItem ? lastItem.id : null;

    // Convert BigInt values to strings
    const serializedResults = results.map((item: any) => ({
      ...item,
      quantity: item.quantity?.toString(),
      // Add other BigInt fields here if needed
    }));

    return c.json({
      data: serializedResults,
      nextCursor,
      hasMore: results.length === limit,
    });
  } catch (error) {
    return c.json({ error: (error as Error).message }, 400);
  }
});

ponder.use("/graphql", graphql());
