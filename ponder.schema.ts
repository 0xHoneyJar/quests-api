import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  ApicultureMint: p.createTable({
    id: p.string(),
    quantity: p.bigint(),
  }),
}));
