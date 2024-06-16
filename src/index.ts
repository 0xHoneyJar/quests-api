import { ponder } from "@/generated";

// Each Zora mint is a different ID under this 1155 contract
export const APICULTURE_ADDRESS = "0x6cfb9280767a3596ee6af887d900014a755ffc75";

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
//   const token = await ApicultureMint.upsert({
//     id: event.args.to,
//     create: {
//       quantity: event.args.amount,
//     },
//     update: ({ current }) => ({
//       quantity: current.quantity + event.args.amount,
//     }),
//   });
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

ponder.on("THJ101Guide:Transfer", async ({ event, context }) => {
  // if (event.block.timestamp > 1716783600) return;
  const { THJ101Guide } = context.db;
  const token = await THJ101Guide.upsert({
    id: event.args.to,
    create: {
      minted: true,
    },
    update: ({ current }) => ({
      minted: true,
    }),
  });
});

ponder.on("Success:TransferSingle", async ({ event, context }) => {
  if (
    event.block.timestamp < 1716826800 ||
    event.block.timestamp > 1717690800
  ) {
    console.log("out of range");
    return;
  }

  if (event.args.id !== 2n) return;

  const { SuccessMint } = context.db;
  const token = await SuccessMint.upsert({
    id: event.args.to,
    create: {
      quantity: event.args.amount,
    },
    update: ({ current }) => ({
      quantity: current.quantity + event.args.amount,
    }),
  });
});

ponder.on("Henlo:TransferSingle", async ({ event, context }) => {
  if (event.block.timestamp > 1718554800) {
    console.log("out of range");
    return;
  }

  if (event.args.id !== 3n) return;

  const { HenloMint } = context.db;
  const token = await HenloMint.upsert({
    id: event.args.to,
    create: {
      minted: true,
    },
    update: ({ current }) => ({
      minted: true,
    }),
  });
});

ponder.on("Seaport:OrderFulfilled", async ({ event, context }) => {
  if (event.block.timestamp > 1718554800) {
    console.log("out of range");
    return;
  }

  if (
    !event.args.offer[0] ||
    event.args.offer[0].token !== APICULTURE_ADDRESS ||
    event.args.offer[0].amount !== 3n
  )
    return;

  const { HenloMint } = context.db;
  const token = await HenloMint.upsert({
    id: event.args.recipient,
    create: {
      minted: true,
    },
    update: ({ current }) => ({
      minted: true,
    }),
  });
});

ponder.on("BoogaBears:TokensMinted", async ({ event, context }) => {
  if (
    event.block.timestamp > 1719073200 ||
    event.block.timestamp < 1718209200
  ) {
    console.log("out of range");
    return;
  }

  const { BoogaBearsMint } = context.db;
  const token = await BoogaBearsMint.upsert({
    id: event.args.recipient,
    create: {
      minted: true,
    },
    update: ({ current }) => ({
      minted: true,
    }),
  });
});
