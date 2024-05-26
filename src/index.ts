import { ponder } from "@/generated";

// ponder.on("Zora1155:TransferSingle", async ({ event, context }) => {
//   console.log("tracking");
//   if (
//     event.block.timestamp < 1714364400 ||
//     event.block.timestamp > 1714969200
//   ) {
//     console.log("out of range");
//     return;
//   }
//   const { ApicultureMint } = context.db;
//   console.log("found");
//   const token = await ApicultureMint.upsert({
//     id: event.args.to,
//     create: {
//       quantity: event.args.amount,
//     },
//     update: ({ current }) => ({
//       quantity: current.quantity + event.args.amount,
//     }),
//   });
//   console.log("update");
// });

// ponder.on("HookVault:TokensDeposited", async ({ event, context }) => {
//   if (event.block.timestamp < 1713414000 || event.block.timestamp > 1713846000)
//     return;
//   const { HookDeposit } = context.db;
//   const token = await HookDeposit.upsert({
//     id: event.transaction.from.toString(),
//     create: {
//       deposited: event.args.depositAmount,
//     },
//     update: ({ current }) => ({
//       deposited: current.deposited + event.args.depositAmount,
//     }),
//   });
// });

// ponder.on("THJ101Guide:Transfer", async ({ event, context }) => {
//   if (event.block.timestamp > 1716783600) return;
//   const { THJ101Guide } = context.db;
//   const token = await THJ101Guide.upsert({
//     id: event.args.to,
//     create: {
//       minted: true,
//     },
//     update: ({ current }) => ({
//       minted: true,
//     }),
//   });
// });

ponder.on("Boba:ERC20Transfer", async ({ event, context }) => {
  const { BobaRecipient } = context.db;
  await BobaRecipient.upsert({
    id: event.args.to.toString(),
  });
});

ponder.on("Wagmipad:Transfer", async ({ event, context }) => {
  const { WagmipadRecipient } = context.db;
  await WagmipadRecipient.upsert({
    id: event.args.to.toString(),
  });
});

ponder.on("Zypher:Transfer", async ({ event, context }) => {
  const { ZypherRecipient } = context.db;
  await ZypherRecipient.upsert({
    id: event.args.to.toString(),
  });
});
