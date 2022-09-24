import React, { useState } from "react"
import { Button } from "@mui/material"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { ethers } from 'ethers'
import { abi } from "../../common/chainclient"
import { CONTRACT_ADDRESS } from "../../common/app.config"
declare let window: any

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

export const MintButton = ({ phrase }: { phrase: string }) => {
  const [isSuccess, setSuccess] = useState(false);

  async function handleMint() {
    const hashArr = ethers.utils.hashMessage(phrase);

    const tx = await contract.mintItem(hashArr, false, {
      value: ethers.utils.parseEther("0.1")
    });

    console.log('play.tx:', tx);
    const tmp = await tx.wait();
    console.log('tx.wait:', tmp);
  }

  return (<React.Fragment>
    <Button
      variant="contained"
      color="secondary"
      sx={{ margin: '.5rem', width: '10rem', padding: '1rem 2rem 1rem 2rem' }}
      disabled={phrase == ''}
      startIcon={<RocketLaunchIcon />}
      onClick={handleMint}>
      Mint
    </Button>
    {isSuccess && (
      <div>
        Successfully minted your NFT!
        <div>
          {/* SHOW IMAGE AND IPFS LINK */}
        </div>
      </div>
    )}
  </React.Fragment>)
}