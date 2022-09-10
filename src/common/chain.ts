import { ethers } from 'ethers';
import dixiArtifact from "../generated/DixiNFT.json"

const contractAddress = '@!';
const abi = dixiArtifact.abi || "";
declare let window: any;

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);


export class Chain {
    player: string;

    constructor(player: string) {
        this.player = player;
    }

    async play(code: string, player: string) {
        console.log('chain.play:', code);
        const tx = await contract.play('0x' + code, {
            value: ethers.utils.parseEther("1.0"),
        });

        console.log('play.tx:', tx);
        const tmp = await tx.wait();
        console.log('tx.wait:', tmp);
    }

    async freeroll(code: string, player: string, sig: string) {
        console.log('chain.freeroll:', '0x' + code);
        const tx = await contract.freeroll('0x' + code, sig);

        console.log('freeroll.tx:', tx);
        const tmp = await tx.wait();
        console.log('tx.wait:', tmp);
    }

    async mint(code: string, sig: string) {
        console.log('chain.mint:', code);
        const tx = await contract.mint('0x' + code, { sig });

        console.log('mint.tx:', tx);
        const tmp = await tx.wait();
        console.log('tx.wait:', tmp);
    }
}