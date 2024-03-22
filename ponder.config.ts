import { createConfig } from "@ponder/core";
import { http } from "viem";

import { cubAbi } from "./abis/cub";

export default createConfig({
  networks: {
    berachainArtio: {
      chainId: 80085,
      transport: http(process.env.PONDER_RPC_URL_80085),
    },
  },
  contracts: {
    CubContract: {
      network: "berachainArtio",
      abi: cubAbi,
      address: "0xd9C0D89A9196d29D7B840e8225E550705CC02Aa0",
      startBlock: 762066,
      filter: { event: "TransferBatch" },
    },
  },
});
