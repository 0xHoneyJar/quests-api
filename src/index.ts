import { ponder } from "@/generated";

ponder.on("Zora1155:TransferSingle", async ({ event, context }) => {
  if (event.block.timestamp < 1714364400 || event.block.timestamp > 1714969200)
    return;
  const { ApicultureMint } = context.db;
  const token = await ApicultureMint.upsert({
    id: event.transaction.from.toString(),
    create: {
      quantity: event.args.amount,
    },
    update: ({ current }) => ({
      quantity: current.quantity + event.args.amount,
    }),
  });
});
