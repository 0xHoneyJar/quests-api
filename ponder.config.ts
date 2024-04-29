import { createConfig } from "@ponder/core";
import { http } from "viem";

import { erc1155Abi } from "./abis/erc1155";

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
  },
  contracts: {
    Zora1155: {
      abi: erc1155Abi,
      filter: {
        event: "TransferSingle",
        args: {
          from: "0x000000000000000000000000000000000000000",
        },
      },
      network: {
        base: {
          address: "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa",
          startBlock: 13264923, // TBD
        },
      },
    },
  },
});
