import { ponder } from "@/generated";
import { BullasMint, EggsMint, eq, HenloMint, SuccessMint } from "ponder:db";

ponder.get("/quest-completion", async (c) => {
  const db = c.get("db");
  const questName = c.req.query("quest");
  const address = c.req.query("address");

  if (!questName || !address) {
    return c.json({ error: "Quest name and address are required" }, 400);
  }

  let result: any;

  switch (questName) {
    case "THJ 101":
      result = await db
        .select({
          quantity: SuccessMint.quantity,
        })
        .from(SuccessMint)
        .where(eq(SuccessMint.id, address));
    case "The Revenge of the Bullas":
      result = await db
        .select({
          quantity: BullasMint.quantity,
        })
        .from(BullasMint)
        .where(eq(BullasMint.id, address));
    case "Henlo 6/9":
      result = await db
        .select({
          quantity: HenloMint.quantity,
        })
        .from(HenloMint)
        .where(eq(HenloMint.id, address));
    case "Jani Love Eggs":
      result = await db
        .select({
          quantity: EggsMint.quantity,
        })
        .from(EggsMint)
        .where(eq(EggsMint.id, address));
  }

  return c.json({ quantity: result?.[0].quantity || 0 });
});
