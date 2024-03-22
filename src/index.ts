import { ponder } from "@/generated";

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
