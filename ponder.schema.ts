import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  ApicultureMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
  HookDeposit: p.createTable({
    id: p.string(), // address of user
    deposited: p.bigint(),
  }),
  BobaRecipient: p.createTable({
    id: p.string(),
  }),
  WagmipadRecipient: p.createTable({
    //
    id: p.string(),
  }),
  ZypherRecipient: p.createTable({
    id: p.string(),
  }),
}));
