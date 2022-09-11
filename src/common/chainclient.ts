import { ethers } from 'ethers';
import dixiArtifact from "../generated/DixiNFT.json"

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = dixiArtifact.abi || "";
declare let window: any;

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

export async function getCurrentPrice() {
    console.log('sinner:', signer._address);
    console.log(await contract.functions.symbol());


    // const [bigNum] = await contract.functions.getCurrentPrice();
    // const price = ethers.utils.formatEther(bigNum);
    // console.log('Current Price:', price + 'Ξ');
    // return price;
}


// export class ChainClient {
//     player: string;

//     constructor(player: string) {
//         this.player = player;
//     }

//     async getCurrentPrice() {
//         const [bigNum] = await contract.functions.getCurrentPrice();
//         const price = ethers.utils.formatEther(bigNum);
//         console.log('Current Price:', price + 'Ξ');
//         return price;
//     }

//     async mint(phrase: string) {
//         console.log('chain.mint:', phrase);
//         const phraseHash = ethers.utils.hashMessage(phrase);
//         const [price] = await contract.functions.getCurrentPrice();
//         const tx = await contract.mint(phraseHash, true, {
//             value: price
//         });

//         console.log('mint.tx:', tx);
//         const tmp = await tx.wait();
//         console.log('tx.wait:', tmp);
//     }

//     // async play(code: string, player: string) {
//     //     console.log('chain.play:', code);
//     //     const tx = await contract.play('0x' + code, {
//     //         value: ethers.utils.parseEther("1.0"),
//     //     });

//     //     console.log('play.tx:', tx);
//     //     const tmp = await tx.wait();
//     //     console.log('tx.wait:', tmp);
//     // }
// }