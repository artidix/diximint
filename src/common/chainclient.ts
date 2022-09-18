import { ethers } from 'ethers';
import dixiArtifact from "../generated/DixiNFT.sol/DixiNFT.json"
import { CONTRACT_ADDRESS } from './app.config';

export const abi = dixiArtifact.abi || "";
declare let window: any;

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
// const signer = provider.getSigner();
// const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

export class ChainClient {
    // async getCurrentPrice() {
    //     console.log('*** SIGNER', signer);

    //     const [bigNum] = await contract.functions.getCurrentPrice();
    //     const price = ethers.utils.formatEther(bigNum);
    //     console.log('Current Price:', price + 'Ξ');
    //     return price;
    // }

    // async mint(phrase: string) {
    //     console.log('chain.mint:', phrase);
    //     const phraseHash = ethers.utils.hashMessage(phrase);
    //     const [price] = await contract.functions.getCurrentPrice();
    //     const tx = await contract.mint(phraseHash, true, {
    //         value: price
    //     });

    //     console.log('mint.tx:', tx);
    //     const tmp = await tx.wait();
    //     console.log('tx.wait:', tmp);
    // }

    // async play(code: string, player: string) {
    //     console.log('chain.play:', code);
    //     const tx = await contract.play('0x' + code, {
    //         value: ethers.utils.parseEther("1.0"),
    //     });

    //     console.log('play.tx:', tx);
    //     const tmp = await tx.wait();
    //     console.log('tx.wait:', tmp);
    // }
}