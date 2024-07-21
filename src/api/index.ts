// import { ponder } from "@/generated";
// import { asc, eq, graphql } from "@ponder/core";

// const questDbMap = {
//   "THJ 101": "THJ101Guide",
//   "Ours de la Renaissance": "SuccessMint",
//   "The Revenge of the Bullas": "BullasMint",
//   "Henlo 6/9": "HenloMint",
//   "Jani Love Eggs": "EggsMint",
//   "Run It Back Turbo": "TurboQuest",
//   "Class Is In Session": "HookedMint",
// };

// ponder.get("/quest", async (c) => {
//   const questName = c.req.query("name");
//   const address = c.req.query("address");

//   console.log(questName, address);

//   if (!questName || !address) {
//     return c.json({ error: "Quest name and address are required" }, 400);
//   }

//   try {
//     const dbName = questDbMap[
//       questName as keyof typeof questDbMap
//     ] as keyof typeof c.tables;
//     if (!dbName) {
//       throw new Error("Invalid quest name");
//     }

//     const result = (await c.db
//       .select()
//       .from(c.tables[dbName])
//       .where(eq(c.tables[dbName].id, address))
//       .limit(1)) as any;

//     return c.json({
//       quantity: Number(result?.quantity),
//       minted: result?.minted,
//       swapped: result?.swapped,
//     });
//   } catch (error) {
//     return c.json({ error: (error as Error).message }, 400);
//   }
// });

// ponder.get("/quest/:questName", async (c) => {
//   const questName = c.req.param("questName");
//   const limit = Number(c.req.query("limit")) || 50;
//   const offset = Number(c.req.query("offset")) || 0;

//   if (!questName) {
//     return c.json({ error: "Quest name is required" }, 400);
//   }

//   try {
//     const dbName = questDbMap[
//       questName as keyof typeof questDbMap
//     ] as keyof typeof c.tables;
//     if (!dbName) {
//       throw new Error("Invalid quest name");
//     }

//     let query = c.db
//       .select()
//       .from(c.tables[dbName])
//       .orderBy(asc(c.tables[dbName].id))
//       .limit(Math.min(limit, 1000))
//       .offset(offset);

//     const results = await query;

//     // Convert BigInt values to strings
//     const serializedResults = results.map((item: any) => ({
//       ...item,
//       quantity: item.quantity?.toString(),
//       // Add other BigInt fields here if needed
//     }));

//     return c.json({
//       data: serializedResults,
//     });
//   } catch (error) {
//     return c.json({ error: (error as Error).message }, 400);
//   }
// });

// ponder.use("/graphql", graphql());
