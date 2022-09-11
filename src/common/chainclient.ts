import { ethers } from 'ethers';
import dixiArtifact from "../generated/DixiNFT.json"

const contractAddress = '@!';
const abi = dixiArtifact.abi || "";
declare let window: any;

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);


export class ChainClient {
    player: string;

    constructor(player: string) {
        this.player = player;
    }

    async getCurrentPrice() {
        const [bigNum] = await contract.functions.getCurrentPrice();
        console.log('Current Price:', ethers.utils.formatEther(bigNum) + 'Ξ');
        return bigNum;
    }

    async mint(phrase: string) {
        console.log('chain.mint:', phrase);
        const phraseHash = ethers.utils.hashMessage(phrase);
        const tx = await contract.mint(phraseHash, true, {
            value: this.getCurrentPrice()
        });

        console.log('mint.tx:', tx);
        const tmp = await tx.wait();
        console.log('tx.wait:', tmp);
    }

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