import { ponder } from "@/generated";

// Fetch ongoing onchain quests
// const { data } = await supabase
//   .from("quests")
//   .select("*")
//   .eq("type", "onchain");

// Onchain quests completion system

// WAGMI quest
ponder.on(
  "WagmiPadTicketContract:ERC20Transfer",
  async ({ event, context }) => {
    const { User, Quest, UserQuest } = context.db;

    // Create quest
    const quest = await Quest.create({
      id: "wagmi-quest",
      data: {
        name: "Wagmification",
      },
    });

    // See if user exists
    const user = await User.findUnique({
      id: event.args.to,
    });

    if (!user) {
      await User.create({
        id: event.args.to,
        data: {
          score: 0n,
        },
      });
    }

    const userQuests = await UserQuest.create({
      id: `${event.args.to}-${quest.id}`,
      data: {
        userId: event.args.to,
        questId: quest.id,
      },
    });
  }
);

// Zypher quest
ponder.on("ZypherMysteryBoxContract:Transfer", async ({ event, context }) => {
  const { User, Quest, UserQuest } = context.db;

  // Check within block timestamp

  // Create quest
  const quest = await Quest.create({
    id: "bonanza-bash",
    data: {
      name: "Bonanza Bash",
    },
  });

  // See if user exists
  const user = await User.findUnique({
    id: event.args.to,
  });

  if (!user) {
    await User.create({
      id: event.args.to,
      data: {
        score: 0n,
      },
    });
  }

  const userQuests = await UserQuest.create({
    id: `${event.args.to}-${quest.id}`,
    data: {
      userId: event.args.to,
      questId: quest.id,
    },
  });
});

// Points (Pollen) system
ponder.on("CubContract:TransferBatch", async ({ event, context }) => {
  const { User } = context.db;

  // see if user exists
  const user = await User.findUnique({
    id: event.args.to,
  });

  if (!user) {
    await User.create({
      id: event.args.to,
      data: {
        score: event.args.amounts.reduce((a, b) => a + b, 0n),
      },
    });
  }
});
