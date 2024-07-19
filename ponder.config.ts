import { createConfig } from "@ponder/core";
import { http, parseAbiItem, zeroAddress } from "viem";

import { createClient } from "@supabase/supabase-js";
import { erc1155Abi } from "./abis/erc1155";
import { erc20Abi } from "./abis/erc20";
import { erc721Abi } from "./abis/erc721";
import { questsFactoryAbi } from "./abis/questsFactory";
import { Database } from "./types/supabase";

export const fetchRafflesAndQuests = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);
  const { data: raffles } = await supabase.from("raffles").select("*");
  const { data: quests } = await supabase.from("quests").select("*");
  return { raffles, quests };
};

export const { raffles, quests } = await fetchRafflesAndQuests();

export default createConfig({
  // database: {
  //   kind: "postgres",
  //   schema: "public",
  //   publishSchema: "indexer",
  // },
  options: {
    maxHealthcheckDuration: 36000, // 10 hours
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
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_URL_10),
    },
    bartio: {
      chainId: 80084,
      transport: http(process.env.PONDER_RPC_URL_80084),
    },
  },
  contracts: {
    QuestFactory: {
      network: "bartio",
      abi: questsFactoryAbi,
      address: "0x200884834a3a0a158d603C873b5F06Dd033f4fFc", // Replace with actual address
      startBlock: 1629785, // Replace with actual start block
    },
    ERC721Quest: {
      network: "bartio",
      abi: erc721Abi, // You'll need to define this ABI
      factory: {
        address: "0x72c1D670a336602bbfca6457163F291A596eCDdC", // Same as QuestFactory address
        event: parseAbiItem(
          "event ERC721QuestDeployed(address indexed contractAddress, uint256[] tokenIds, string questName, uint256 startTimestamp, uint256 endTimestamp)"
        ),
        parameter: "contractAddress",
      },
      filter: {
        event: "Transfer",
        args: {
          from: zeroAddress,
        },
      },
      startBlock: 80000,
    },
    ERC1155Quest: {
      network: {},
      abi: erc1155Abi, // You'll need to define this ABI
      factory: {
        address: "0x72c1D670a336602bbfca6457163F291A596eCDdC", // Same as QuestFactory address
        event: parseAbiItem(
          "event ERC1155QuestDeployed(address indexed contractAddress, uint256[] tokenIds, string questName, uint256 startTimestamp, uint256 endTimestamp)"
        ),
        parameter: "contractAddress",
      },
      filter: {
        event: "TransferSingle",
        args: {
          from: zeroAddress,
        },
      },
    },
    ERC20Quest: {
      network: {},
      abi: erc20Abi, // You'll need to define this ABI
      factory: {
        address: "0x72c1D670a336602bbfca6457163F291A596eCDdC", // Same as QuestFactory address
        event: parseAbiItem(
          "event ERC20QuestDeployed(address indexed contractAddress, string questName, uint256 startTimestamp, uint256 endTimestamp)"
        ),
        parameter: "contractAddress",
      },
      filter: {
        event: "Transfer",
        args: {
          from: zeroAddress,
        },
      },
    },
  },
});
