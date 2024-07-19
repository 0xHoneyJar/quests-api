import { ponder } from "@/generated";

ponder.on("QuestFactory:ERC1155QuestDeployed", async ({ event, context }) => {
  await createQuest(event, context, "ERC1155", event.args.tokenIds as bigint[]);
});

ponder.on("QuestFactory:ERC721QuestDeployed", async ({ event, context }) => {
  await createQuest(event, context, "ERC721");
});

ponder.on("QuestFactory:ERC20QuestDeployed", async ({ event, context }) => {
  await createQuest(event, context, "ERC20");
});

async function createQuest(
  event: any,
  context: any,
  questType: "ERC1155" | "ERC721" | "ERC20",
  tokenIds?: bigint[]
) {
  const { Quest } = context.db;

  console.log(event.args.tokenIds);

  await Quest.create({
    id: event.args.contractAddress,
    data: {
      startTime: event.args.startTimestamp,
      endTime: event.args.endTimestamp,
      tokenAddress: event.args.contractAddress,
      name: event.args.questName,
      type: questType,
      tokenIds: tokenIds ? tokenIds.map((id) => id.toString()).join(",") : "",
    },
  });
}

async function handleTransfer(event: any, context: any, amount: bigint) {
  const { UserQuestMint, User, Quest } = context.db;

  const quest = await Quest.findUnique({
    id: event.log.address,
  });
  if (!quest) return;

  await User.upsert({
    id: event.args.to,
    create: { id: event.args.to },
    update: {},
  });

  await UserQuestMint.upsert({
    id: `${quest.name}-${event.args.to}`,
    create: {
      userId: event.args.to,
      questId: event.log.address,
      amountMinted: amount,
    },
    update({ current }: { current: any }) {
      return {
        amountMinted: current.amountMinted + amount,
      };
    },
  });
}

ponder.on("ERC1155Quest:TransferSingle", async ({ event, context }) => {
  await handleTransfer(event, context, event.args.amount);
});

ponder.on("ERC721Quest:Transfer", async ({ event, context }) => {
  await handleTransfer(event, context, 1n);
});

ponder.on("ERC20Quest:Transfer", async ({ event, context }) => {
  await handleTransfer(event, context, event.args.amount);
});
