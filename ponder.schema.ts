import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  User: p.createTable({
    id: p.hex(),
    score: p.bigint(),
  }),
}));
