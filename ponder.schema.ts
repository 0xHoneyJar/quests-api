import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  // ApicultureMint: p.createTable({
  //   id: p.string(),
  //   quantity: p.bigint(),
  // }),
  // HookDeposit: p.createTable({
  //   id: p.string(), // address of user
  //   deposited: p.bigint(),
  // }),
  SuccessMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
  THJ101Guide: p.createTable({
    id: p.string(),
    minted: p.boolean(),
  }),
  HenloMint: p.createTable({
    id: p.string(),
    minted: p.boolean(),
  }),
  BoogaBearsMint: p.createTable({
    id: p.string(),
    minted: p.boolean(),
  }),
}));
