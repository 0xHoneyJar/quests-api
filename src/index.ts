import { ponder } from "@/generated";

// Each Zora mint is a different ID under this 1155 contract
export const APICULTURE_ADDRESS = "0x6cfb9280767a3596ee6af887d900014a755ffc75";
export const BULLAS_ADDRESS = "0x98F6b7Db312dD276b9a7bD08e3937e68e662202C";
export const EGGS_ADDRESS = "0x30b8c95a6e7170a1322453b47722f10fea185b0f";

// const bullasQuest = quests?.find(
//   (quest) => quest.title === "The Revenge of the Bullas"
// );
// const henloQuest = quests?.find((quest) => quest.title === "Henlo 6/9");
// const thj101Quest = quests?.find((quest) => quest.title === "THJ 101");
// const boogaBearsQuest = quests?.find(
//   (quest) => quest.title === "Proof of Booga"
// );
// const janiLoveEggsQuest = quests?.find(
//   (quest) => quest.title === "Jani Love Eggs"
// );

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
  // No range check because we want to track all THJ101 mints
  const { THJ101Guide } = context.db;
  const token = await THJ101Guide.upsert({
    id: event.args.to,
    create: {
      quantity: 1n,
    },
    update: ({ current }) => ({
      quantity: current.quantity + 1n,
    }),
  });
});

ponder.on("Eggs:TransferSingle", async ({ event, context }) => {
  if (event.block.timestamp <= 1721325600) {
    const { EggsMint } = context.db;
    const token = await EggsMint.upsert({
      id: event.args.to,
      create: {
        quantity: event.args.amount,
      },
      update: ({ current }) => ({
        quantity: current.quantity + event.args.amount,
      }),
    });
  }
});

ponder.on("Success:TransferSingle", async ({ event, context }) => {
  if (
    event.block.timestamp <= 1716826800 &&
    event.block.timestamp >= 1717690800 &&
    event.args.id === 2n
  ) {
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
  }
});

ponder.on("Henlo:TransferSingle", async ({ event, context }) => {
  if (event.block.timestamp <= 1718554800 && event.args.id === 3n) {
    const { HenloMint } = context.db;
    const token = await HenloMint.upsert({
      id: event.args.to,
      create: {
        quantity: event.args.amount,
      },
      update: ({ current }) => ({
        quantity: current.quantity + event.args.amount,
      }),
    });
  }
});

ponder.on("Bullas:TransferSingle", async ({ event, context }) => {
  if (event.block.timestamp <= 1721160000) {
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
  }
});

// ponder.on("Seaport:OrderFulfilled", async ({ event, context }) => {
//   const firstOffer = event.args.offer[0];
//   const { BullasMint, HenloMint } = context.db;

//   // Bullas Mint
//   if (bullasQuest && event.block.timestamp <= bullasQuest.endTime) {
//     if (firstOffer && isAddressEqual(firstOffer.token, BULLAS_ADDRESS)) {
//       await BullasMint.upsert({
//         id: event.args.recipient,
//         create: {
//           quantity: firstOffer.amount,
//         },
//         update: ({ current }) => ({
//           quantity: current.quantity + firstOffer.amount,
//         }),
//       });
//     }
//   } else {
//     // console.log("Bullas: out of range");
//   }

//   // Henlo Mint
//   if (henloQuest && event.block.timestamp <= henloQuest.endTime) {
//     if (
//       firstOffer &&
//       isAddressEqual(firstOffer.token, APICULTURE_ADDRESS) &&
//       firstOffer.identifier === 3n
//     ) {
//       await HenloMint.upsert({
//         id: event.args.recipient,
//         create: { minted: true },
//         update: ({ current }) => ({
//           minted: true,
//         }),
//       });
//     }
//   } else {
//     // console.log("Henlo: out of range");
//   }
// });

ponder.on("BoogaBears:TokensMinted", async ({ event, context }) => {
  if (
    event.block.timestamp <= 1719088140 &&
    event.block.timestamp >= 1718209200
  ) {
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
  }
});

ponder.on("Ticket:Transfer", async ({ event, context }) => {
  const { TurboQuest } = context.db;

  if (event.block.timestamp <= 1720461600) {
    await TurboQuest.upsert({
      id: event.args.to,
      create: {
        minted: true,
        swapped: false,
      },
      update: {
        minted: true,
      },
    });
  }
});

ponder.on("UniswapV3Pool:Swap", async ({ event, context }) => {
  const { TurboQuest } = context.db;

  if (
    event.block.timestamp >= 1719597600 &&
    event.block.timestamp <= 1720461600
  ) {
    await TurboQuest.upsert({
      id: event.args.recipient,
      create: {
        minted: false,
        swapped: true,
      },
      update: {
        swapped: true,
      },
    });
  }
});
