import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  HookDeposit: p.createTable({
    id: p.hex(), // address of user
    deposited: p.bigint(),
  }),
}));
