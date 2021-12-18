function checkEnv(env: string | undefined, name: string) {
  if (!env) {
    throw new Error(
      `Please define the ${name} environment variable inside .env.local`
    );
  }

  return env;
}

export function getSanityProjectId() {
  const env = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return checkEnv(env, "NEXT_PUBLIC_SANITY_PROJECT_ID");
}

export function getSanityDataset() {
  const env = process.env.NEXT_PUBLIC_SANITY_DATASET;
  return checkEnv(env, "NEXT_PUBLIC_SANITY_DATASET");
}
