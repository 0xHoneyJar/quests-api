import { createConfig } from "@ponder/core";
import { http } from "viem";

import { hookVaultAbi } from "./abis/hookVault";
import { bobaAbi } from "./abis/boba";

export default createConfig({
  database: {
    kind: "postgres",
    schema: "public",
    publishSchema: "indexer",
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
    berachainArtio: {
      chainId: 80085,
      transport: http(process.env.PONDER_RPC_URL_80085),
    },
  },
  contracts: {
    HookVault: {
      abi: hookVaultAbi,
      filter: { event: "TokensDeposited" },
      network: {
        ethereum: {
          address: "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa",
          startBlock: 19672108,
          //endBlock: 19716773,
        },
        arbitrum: {
          address: "0xCa34d7cc253b47E0248b80c859F38a658db7BcCC",
          startBlock: 201662549,
          //endBlock: 203684249,
        },
        base: {
          address: "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa",
          startBlock: 13264923,
          //endBlock: 13534940,
        },
      },
    },
    Boba: {
      abi: bobaAbi,
      filter: {
        event: "ERC20Transfer",
        args: {
          from: "0x000000000000000000000000000000000000000",
        },
      },
      network: {
        berachainArtio: {
          address: "0x1F136a43101D12F98c9887D46D7cDbEFACdd573D",
          startBlock: 1041454,
          endBlock: 1209454,
        },
      },
    },
  },
});
