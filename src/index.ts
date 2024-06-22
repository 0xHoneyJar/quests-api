import { ponder } from "@/generated";

// Each Zora mint is a different ID under this 1155 contract
export const APICULTURE_ADDRESS = "0x6cfb9280767a3596ee6af887d900014a755ffc75";
export const BULLAS_ADDRESS = "0x98f6b7db312dd276b9a7bd08e3937e68e662202c";

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

ponder.on("Bullas:TransferSingle", async ({ event, context }) => {
  if (event.block.timestamp > 1719606540) {
    return;
  }

  const { BullasMint } = context.db;
  const token = await BullasMint.upsert({
    id: event.args.to,
    create: {
      quantity: event.args.amount,
    },
    update: ({ current }) => ({
      quantity: current.quantity + event.args.amount,
    }),
  });
});

ponder.on("Seaport:OrderFulfilled", async ({ event, context }) => {
  const firstOffer = event.args.offer[0];

  // Bullas Mint
  if (event.block.timestamp <= 1719511200) {
    if (firstOffer && firstOffer.token === BULLAS_ADDRESS) {
      const { BullasMint } = context.db;
      await BullasMint.upsert({
        id: event.args.recipient,
        create: {
          quantity: firstOffer.amount,
        },
        update: ({ current }) => ({
          quantity: current.quantity + firstOffer.amount,
        }),
      });
    }
  } else {
    console.log("Bullas: out of range");
  }

  // Henlo Mint
  if (event.block.timestamp <= 1718554800) {
    if (
      firstOffer &&
      firstOffer.token === APICULTURE_ADDRESS &&
      firstOffer.identifier === 3n
    ) {
      const { HenloMint } = context.db;
      await HenloMint.upsert({
        id: event.args.recipient,
        create: { minted: true },
        update: { minted: true },
      });
    }
  } else {
    console.log("Henlo: out of range");
  }
});

ponder.on("BoogaBears:TokensMinted", async ({ event, context }) => {
  if (
    event.block.timestamp > 1719088140 ||
    event.block.timestamp < 1718209200
  ) {
    return;
  }

  const { BoogaBearsMint } = context.db;
  const token = await BoogaBearsMint.upsert({
    id: event.args.recipient,
    create: {
      quantity: event.args.amount,
    },
    update: ({ current }) => ({
      quantity: current.quantity + event.args.amount,
    }),
  });
});
