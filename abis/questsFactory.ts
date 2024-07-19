export const questsFactoryAbi = [
  {
    type: "function",
    name: "deployQuest",
    inputs: [
      {
        name: "_contractAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_questType",
        type: "uint8",
        internalType: "enum QuestsFactory.QuestType",
      },
      {
        name: "_tokenIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      { name: "_questName", type: "string", internalType: "string" },
      {
        name: "_startTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_endTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "ERC1155QuestDeployed",
    inputs: [
      {
        name: "contractAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenIds",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        name: "questName",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "startTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "endTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ERC20QuestDeployed",
    inputs: [
      {
        name: "contractAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "questName",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "startTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "endTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ERC721QuestDeployed",
    inputs: [
      {
        name: "contractAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenIds",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        name: "questName",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "startTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "endTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;
