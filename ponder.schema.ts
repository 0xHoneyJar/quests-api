import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  User: p.createTable({
    id: p.string(),
    score: p.bigint(),
    userQuests: p.many("UserQuest.userId"),
  }),
  Quest: p.createTable({
    id: p.string(),
    name: p.string(),
    userQuests: p.many("UserQuest.questId"),
  }),
  UserQuest: p.createTable({
    id: p.string(),
    userId: p.string().references("User.id"),
    questId: p.string().references("Quest.id"),
    user: p.one("userId"),
    quest: p.one("questId"),
  }),
}));
