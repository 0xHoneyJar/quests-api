import { ponder } from "@/generated";

ponder.on("HookVault:TokensDeposited", async ({ event, context }) => {
  if (event.block.timestamp < 1713414000 || event.block.timestamp > 1713846000)
    return;
  const { HookDeposit } = context.db;
  const user = await HookDeposit.findUnique({
    id: event.transaction.from,
  });
  const token = await HookDeposit.upsert({
    id: event.transaction.from,
    create: {
      deposited: event.args.depositAmount,
    },
    update: ({ current }) => ({
      deposited: current.deposited + event.args.depositAmount,
    }),
  });
});
