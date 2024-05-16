#!/usr/bin/env deno run --allow-read --allow-write

/**
This is a simple script that switches the manifest file between development, local, and production environments.
It's meant to be used when developing locally, to ease the process of switching between different environments.

You can run it like this `./.env-switch.ts <target-env>`. (remember to make it executable with `chmod +x ./.env-switch.ts`)
*/

const MANIFEST_PATH = "./manifest.xml";

const [target] = Deno.args;
if (!["development", "local", "production"].includes(target)) {
  throw new Error(`Invalid target: ${target}`);
}

const currentManfiest = await Deno.readTextFile(MANIFEST_PATH);

const isProduction = currentManfiest.includes(
  "<registrationUrl>https://integration.tings.com/api/shopware/registration</registrationUrl>",
);
const isDevelopment = currentManfiest.includes(
  "<registrationUrl>https://dev.integration.tings.com/api/shopware/registration</registrationUrl>",
);

const isLocal =
  currentManfiest.includes("bore.pub") || (!isProduction && !isDevelopment);

if (isProduction) {
  Deno.rename(MANIFEST_PATH, "./production-manifest.xml");
}

if (isDevelopment) {
  Deno.rename(MANIFEST_PATH, "./development-manifest.xml");
}

if (isLocal) {
  Deno.rename(MANIFEST_PATH, "./local-manifest.xml");
}

const TARGET_MANIFEST_FILE = `./${target}-manifest.xml`;
const targetManifest = await Deno.readTextFile(TARGET_MANIFEST_FILE);
Deno.rename(TARGET_MANIFEST_FILE, MANIFEST_PATH);
