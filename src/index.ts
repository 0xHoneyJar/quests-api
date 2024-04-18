import { ponder } from "@/generated";

ponder.on("HookVault:TokensDeposited", async ({ event, context }) => {
  if (event.block.timestamp < 1713414000 || event.block.timestamp > 1713846000)
    return;
  const { HookDeposit } = context.db;
  const token = await HookDeposit.upsert({
    id: event.transaction.from.toString(),
    create: {
      deposited: event.args.depositAmount,
    },
    update: ({ current }) => ({
      deposited: current.deposited + event.args.depositAmount,
    }),
  });
});
