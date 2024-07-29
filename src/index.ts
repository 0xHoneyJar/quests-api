import { ponder } from "@/generated";
import { zeroAddress } from "viem";

// Each Zora mint is a different ID under this 1155 contract
export const STDV4TNT_ADDRESS = "0x355bb949d80331516Fc7F4CF81229021187d67d2";
export const KODIAK_POOL_ADDRESS = "0x7573b735e6e9ecc65c0e55f49f458ac6e4d133b5";

ponder.on("STDV4TNT:Transfer", async ({ event, context }) => {
  const { UnionQuest } = context.db;
  const { from, to } = event.args;

  if (from === zeroAddress) {
    await UnionQuest.upsert({
      id: to,
      create: {
        currentStep: 1n,
        stdMinted: true,
        liquidityProvided: false,
      },
      update: ({ current }) => ({
        currentStep: current.currentStep === 0n ? 1n : current.currentStep,
        stdMinted: true,
      }),
    });
  }
});

ponder.on("Uniswap:Mint", async ({ event, context }) => {
  const { UnionQuest } = context.db;
  const { owner } = event.args;

  await UnionQuest.upsert({
    id: owner,
    create: {
      currentStep: 1n,
      stdMinted: false,
      liquidityProvided: true,
    },
    update: ({ current }) => ({
      currentStep: current.stdMinted ? 2n : 1n,
      liquidityProvided: true,
    }),
  });
});
