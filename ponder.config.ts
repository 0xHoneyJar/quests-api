import { createConfig } from "@ponder/core";
import { http } from "viem";

import { createClient } from "@supabase/supabase-js";
import { boogaBearsAbi } from "./abis/boogaBears";
import { erc1155Abi } from "./abis/erc1155";
import { erc721Abi } from "./abis/erc721";
import { seaportAbi } from "./abis/seaport";
import { APICULTURE_ADDRESS, BULLAS_ADDRESS } from "./src";
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
  database: {
    kind: "postgres",
    schema: "public",
    publishSchema: "indexer",
  },
  options: {
    maxHealthcheckDuration: 10800, // 3 hours
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
    Success: {
      abi: erc1155Abi,
      filter: {
        event: "TransferSingle",
        args: {
          from: "0x0000000000000000000000000000000000000000",
        },
      },
      network: {
        base: {
          address: APICULTURE_ADDRESS,
          startBlock: 15005617,
          endBlock: 15890961,
        },
      },
    },
    Henlo: {
      abi: erc1155Abi,
      filter: {
        event: "TransferSingle",
        args: {
          from: "0x0000000000000000000000000000000000000000",
        },
      },
      network: {
        base: {
          address: APICULTURE_ADDRESS,
          startBlock: 15005617,
          endBlock: 15890961,
        },
      },
    },
    Bullas: {
      abi: erc1155Abi,
      filter: {
        event: "TransferSingle",
        args: {
          from: "0x0000000000000000000000000000000000000000",
        },
      },
      network: {
        base: {
          address: BULLAS_ADDRESS,
          startBlock: 15898404,
          endBlock: 16283259,
        },
      },
    },
    Seaport: {
      abi: seaportAbi,
      filter: {
        event: "OrderFulfilled",
      },
      network: {
        base: {
          address: "0x0000000000000068F116a894984e2DB1123eB395",
          startBlock: 15005617,
        },
      },
    },
    BoogaBears: {
      abi: boogaBearsAbi,
      filter: {
        event: "TokensMinted",
      },
      network: {
        arbitrum: {
          address: "0x6Ba79f573EdFE305e7Dbd79902BC69436e197834",
          startBlock: 220862709,
        },
      },
    },
  },
});
