import { createConfig } from "@ponder/core";
import { http } from "viem";

import { bobaAbi } from "./abis/boba";
import { erc721Abi } from "./abis/erc721";

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
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_URL_10),
    },
  },
  contracts: {
    // Zora1155: {
    //   abi: erc1155Abi,
    //   filter: {
    //     event: "TransferSingle",
    //     args: {
    //       from: "0x0000000000000000000000000000000000000000",
    //     },
    //   },
    //   network: {
    //     base: {
    //       address: "0x6cfb9280767a3596ee6af887d900014a755ffc75",
    //       startBlock: 13791613, // TBD
    //     },
    //   },
    // },
    // HookVault: {
    //   abi: hookVaultAbi,
    //   filter: { event: "TokensDeposited" },
    //   network: {
    //     ethereum: {
    //       address: "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa",
    //       startBlock: 19672108,
    //       endBlock: 19716773,
    //     },
    //     arbitrum: {
    //       address: "0xCa34d7cc253b47E0248b80c859F38a658db7BcCC",
    //       startBlock: 201662549,
    //       endBlock: 203684249,
    //     },
    //     base: {
    //       address: "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa",
    //       startBlock: 13264923,
    //       endBlock: 13534940,
    //     },
    //   },
    // },
    THJ101Guide: {
      abi: erc721Abi,
      filter: {
        event: "Transfer",
        args: {
          from: "0x0000000000000000000000000000000000000000",
        },
      },
      network: {
        optimism: {
          address: "0x9bc2C48189Ff3865875E4A85AfEb6d6ba848739B",
          startBlock: 120304396,
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
          startBlock: 0,
          endBlock: 0,
        },
      },
    },
    Zypher: {
      abi: erc721Abi,
      network: {
        berachainArtio: {
          address: "0xB3AFdDA99fe78C47c9EeeaDE8D1121ceC03b4806",
          startBlock: 0,
          endBlock: 0,
        },
      },
      filter: {
        event: "Transfer",
        args: {
          from: "0x0000000000000000000000000000000000000000",
        },
      },
    },
    Wagmipad: {
      abi: erc721Abi,
      network: {
        berachainArtio: {
          address: "0xC5E02F53006380A6705A60d7861e2210e87C0DFC",
          startBlock: 0,
          endBlock: 0,
        },
      },
      filter: {
        event: "Transfer",
        args: {
          from: "0x0000000000000000000000000000000000000000",
        },
      },
    },
  },
});
