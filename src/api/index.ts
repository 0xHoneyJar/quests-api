import { ponder } from "@/generated";
import { graphql } from "@ponder/core";

ponder.get("/quest", async (c) => {
  const db = c.get("db");
  const questName = c.req.query("name");
  const address = c.req.query("address");

  console.log(questName, address);

  if (!questName || !address) {
    return c.json({ error: "Quest name and address are required" }, 400);
  }

  let result: any;

  switch (questName) {
    case "THJ 101":
      result = await db.THJ101Guide.findUnique({
        id: address,
      });
    case "Ours de la Renaissance":
      result = await db.SuccessMint.findUnique({
        id: address,
      });
    case "The Revenge of the Bullas":
      result = await db.BullasMint.findUnique({
        id: address,
      });
    case "Henlo 6/9":
      result = await db.HenloMint.findUnique({
        id: address,
      });
    case "Jani Love Eggs":
      result = await db.EggsMint.findUnique({
        id: address,
      });
    case "Run It Back Turbo":
      result = await db.TurboQuest.findUnique({
        id: address,
      });
  }

  console.log(result);

  return c.json({
    quantity: result?.quantity,
    minted: result?.minted,
    swapped: result?.swapped,
  });
});

ponder.use("/graphql", graphql());
