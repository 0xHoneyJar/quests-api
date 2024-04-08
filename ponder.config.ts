import { createConfig } from "@ponder/core";
import { http } from "viem";

import { cubAbi } from "./abis/cub";
import { erc721Abi } from "./abis/erc721";
import { wagmiPadTicketAbi } from "./abis/wagmiPadTicket";

export default createConfig({
  networks: {
    berachainArtio: {
      chainId: 80085,
      maxHistoricalTaskConcurrency: 1,
      transport: http(process.env.PONDER_RPC_URL_80085, { timeout: 900_000 }),
    },
  },
  contracts: {
    CubContract: {
      network: "berachainArtio",
      abi: cubAbi,
      address: "0xd9C0D89A9196d29D7B840e8225E550705CC02Aa0",
      startBlock: 762066,
      maxBlockRange: 200,
      filter: { event: "TransferBatch" },
    },
    WagmiPadTicketContract: {
      network: "berachainArtio",
      abi: wagmiPadTicketAbi,
      address: "0xC5E02F53006380A6705A60d7861e2210e87C0DFC",
      startBlock: 762066,
      maxBlockRange: 200,
      filter: {
        event: "ERC20Transfer",
        args: { from: "0x0000000000000000000000000000000000000000" },
      },
    },
    ZypherMysteryBoxContract: {
      network: "berachainArtio",
      abi: erc721Abi,
      address: "0xC5E02F53006380A6705A60d7861e2210e87C0DFC",
      startBlock: 762066,
      maxBlockRange: 200,
      filter: {
        event: "Transfer",
        args: { from: "0x0000000000000000000000000000000000000000" },
      },
    },
  },
});
