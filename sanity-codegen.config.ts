import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./src/lib/sanity/schema.ts",
  outputPath: "./src/lib/sanity/schemaTypes.ts",
};

export default config;
