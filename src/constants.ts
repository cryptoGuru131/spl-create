import { PublicKey } from "@solana/web3.js";

const isMainnet = true;
export const SWRD_TOKEN_MINT = new PublicKey(
  isMainnet
    ? ""
    : ""
);
export const CREATE_TOKEN_FLAG = true; 

export const IMG_NAME = "logo.png";
export const IMG_PATH = `assets/${IMG_NAME}`;
export const TOKEN_NAME = "";
export const TOKEN_SYMBOL = "";
export const TOKEN_DESCRIPTION =
  "PHATBOT token";
export const TOKEM_DECIMAL = 9; 
export const MINT_AMOUNT = 1_000_000;

export const NETWORK = isMainnet ? "mainnet-beta" : "devnet";
export const MAINNET_BUNDLR: string = "https://node1.bundlr.network";
export const DEVNET_BUNDLR: string = "https://devnet.bundlr.network";
export const BUNDLR_ADDR = isMainnet ? MAINNET_BUNDLR : DEVNET_BUNDLR;
export const IS_TOKEN_2022 = true;

export const PRIVATE_KEY = "";
