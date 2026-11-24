import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smartwatch says I closed my exercise rings today by shaking my wrist while eating chips on the couch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
