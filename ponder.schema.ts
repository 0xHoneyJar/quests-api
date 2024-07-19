import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  QuestType: p.createEnum(["ERC721", "ERC1155", "ERC20"]),
  User: p.createTable({
    id: p.string(),
    questMints: p.many("UserQuestMint.userId"),
  }),
  UserQuestMint: p.createTable({
    id: p.string(),
    userId: p.string().references("User.id"),
    questId: p.string().references("Quest.id"),
    amountMinted: p.bigint(),
  }),
  Quest: p.createTable({
    id: p.string(),
    name: p.string(),
    type: p.enum("QuestType"),
    startTime: p.bigint(),
    endTime: p.bigint(),
    tokenAddress: p.string(),
    tokenIds: p.string(),
  }),
}));
