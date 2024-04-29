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
          from: "0x0000000000000000000000000000000000000000",
        },
      },
      network: {
        base: {
          address: "0x6cfb9280767a3596ee6af887d900014a755ffc75",
          startBlock: 13791613, // TBD
        },
      },
    },
  },
});
