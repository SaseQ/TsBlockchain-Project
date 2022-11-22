import { Block } from "../types";
import { writeFileSync } from "fs";

export const writeBlockchain = (blockchain: Block[]) => {
    const blockchainString = JSON.stringify(blockchain, null, 2);
    writeFileSync("./blockchain/blockchain.json", blockchainString);
}
