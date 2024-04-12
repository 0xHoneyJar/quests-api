import { createConfig } from "@ponder/core";
import { http } from "viem";

import { hookVaultAbi } from "./abis/hookVault";

export default createConfig({
  database: {
    kind: "postgres",
  },
  networks: {
    ethereum: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
    },
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
    },
  },
  contracts: {
    HookVault: {
      abi: hookVaultAbi,
      filter: { event: "TokensDeposited" },
      network: {
        ethereum: {
          address: "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa",
          startBlock: 19321051, // deploy tx block
          endBlock: 19321051 + 100,
        },
        arbitrum: {
          address: "0xCa34d7cc253b47E0248b80c859F38a658db7BcCC",
          startBlock: 180189042,
          endBlock: 180189042 + 100,
        },
        base: {
          address: "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa",
          startBlock: 12694135,
          endBlock: 12694135 + 100,
        },
      },
    },
  },
});
