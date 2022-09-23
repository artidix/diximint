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

  // @!tmp
  const phraseHash = 'QmRAQB6YaCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4';

  async function handleMint() {
    console.log('mmintz', phrase);
    console.log('signer', signer);
    console.log(signer._address);


  }

  return (<React.Fragment>
    <Button
      variant="contained"
      color="secondary"
      sx={{ margin: '.5rem', width: '10rem', padding: '1rem 2rem 1rem 2rem' }}
      disabled={phrase != ''}
      startIcon={<RocketLaunchIcon />}
      // onClick={() => requestMinting(phrase)}
      onClick={handleMint}
    >
      Mint
    </Button>
    {isSuccess && (
      <div>
        Successfully minted your NFT!
        <div>
          {/* {data?.hash} */}
        </div>
      </div>
    )}
  </React.Fragment>)
}