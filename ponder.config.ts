import { createConfig } from "@ponder/core";
import { http, zeroAddress } from "viem";

import { erc20Abi } from "./abis/erc20";
import { uniswapV3PoolAbi } from "./abis/uniswap";
import { KODIAK_POOL_ADDRESS, STDV4TNT_ADDRESS } from "./src";

export default createConfig({
  database: {
    kind: "postgres",
    schema: "public",
    publishSchema: "indexer",
  },
  options: {
    maxHealthcheckDuration: 36000, // 10 hours
  },
  networks: {
    bartio: {
      chainId: 80084,
      transport: http(process.env.PONDER_RPC_URL_80084),
    },
  },
  contracts: {
    Uniswap: {
      abi: uniswapV3PoolAbi,
      filter: {
        event: "Mint",
      },
      network: {
        bartio: {
          address: KODIAK_POOL_ADDRESS,
          startBlock: 1928273,
        },
      },
    },
    STDV4TNT: {
      abi: erc20Abi,
      filter: {
        event: "Transfer",
        args: {
          from: zeroAddress,
        },
      },
      network: {
        bartio: {
          address: STDV4TNT_ADDRESS,
          startBlock: 1928273,
        },
      },
    },
  },
});
