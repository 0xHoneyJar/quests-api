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
  THJ101Guide: p.createTable({
    id: p.string(),
    minted: p.boolean(),
  }),
  BobaMint: p.createTable({
    id: p.string(),
  }),
  ZypherMint: p.createTable({
    id: p.string(),
  }),
  // SuccessMint: p.createTable({
  //   id: p.string(),
  //   quantity: p.bigint(),
  // }),
  HenloMint: p.createTable({
    id: p.string(),
    minted: p.boolean(),
  }),
}));
