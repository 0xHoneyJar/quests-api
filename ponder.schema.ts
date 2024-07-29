import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  UnionQuest: p.createTable({
    id: p.string(),
    currentStep: p.bigint(),
    stdMinted: p.boolean(),
    liquidityProvided: p.boolean(),
  }),
}));
