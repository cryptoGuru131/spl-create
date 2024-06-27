import { PublicKey } from "@solana/web3.js";

const isMainnet = true;
export const SWRD_TOKEN_MINT = new PublicKey(
  isMainnet
    ? "J3oUXXuE73HSQ2YJCwbWY2C4hwhPc3gxgiCMc3LR7oVQ"
    : "J3oUXXuE73HSQ2YJCwbWY2C4hwhPc3gxgiCMc3LR7oVQ"
);
export const CREATE_TOKEN_FLAG = true; // true -> create new token, false -> use above token

export const IMG_NAME = "logo.png";
export const IMG_PATH = `assets/${IMG_NAME}`;
export const TOKEN_NAME = "PHATBOT";
export const TOKEN_SYMBOL = "$PHAT";
export const TOKEN_DESCRIPTION =
  "PHATBOT token";
export const TOKEM_DECIMAL = 9; // token decimal
export const MINT_AMOUNT = 1_000_000; // total supply

export const NETWORK = isMainnet ? "mainnet-beta" : "devnet";
export const MAINNET_BUNDLR: string = "https://node1.bundlr.network";
export const DEVNET_BUNDLR: string = "https://devnet.bundlr.network";
export const BUNDLR_ADDR = isMainnet ? MAINNET_BUNDLR : DEVNET_BUNDLR;
export const IS_TOKEN_2022 = true;

export const PRIVATE_KEY = "yHvuBbsJCqFScsPZvSuB5krSH46RamnH4D5yB76uU9nBqSwvsNNfLo8jyo9Gh7FP4RkvjXtDAp7u2dB6V2U3gML";
