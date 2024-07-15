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
    quantity: p.bigint(),
  }),
  HenloMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
  BoogaBearsMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
  BoogaBearsRaffle: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
  BullasMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
  EggsMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
  TurboQuest: p.createTable({
    id: p.string(),
    minted: p.boolean(),
    swapped: p.boolean(),
  }),
  HookedMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
}));
