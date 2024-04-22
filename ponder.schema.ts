import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  HookDeposit: p.createTable({
    id: p.string(), // address of user
    deposited: p.bigint(),
  }),
  BobaRecipient: p.createTable({
    id: p.string(),
  }),
}));
