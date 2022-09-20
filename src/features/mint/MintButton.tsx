import { Button } from "@mui/material"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useSnackbar } from "notistack";
import { mintThunk, MintThunkInput } from "./mintTunk";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { currentPriceSelector } from "./mintSlice";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { CONTRACT_ADDRESS } from "../../common/app.config";
import { abi } from "../../common/chainclient";
import React from "react";
import { utils } from "ethers";


export const MintButton = ({phrase} : {phrase: string}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  console.log('phrase', phrase, CONTRACT_ADDRESS);
  
  const phraseHash = 'QmRAQB6YaCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4';
  //utils.formatBytes32String('');
  //utils.keccak256(phrase);

  const { config } = usePrepareContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: 'mintItem',
    overrides: {
      value: utils.parseEther('0.01')
    },
    args: ['phrase', phraseHash, true],
    onSuccess: (data) => {console.log('success?', data)},
    onError: (e) => console.log('err', e),
  })

  const { data, write } = useContractWrite(config)

  console.log(data, write);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })


  // const requestMinting = async (_phrase: string) => {
  //   var mintRequest = { phrase: _phrase } as MintThunkInput;
  //   var res = await dispatch(mintThunk(mintRequest));

  //   const result = res.payload as any;
  //   if (result.id) {
  //     enqueueSnackbar(`${_phrase}: ${result.id}`);
  //   }
  // }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{ margin: '.5rem', width: '10rem', padding: '1rem 2rem 1rem 2rem' }}
        disabled={!write || isLoading || phrase == null || phrase == ''}
        startIcon={<RocketLaunchIcon />}
        // onClick={() => requestMinting(phrase)}
        onClick={() => write?.()}
      >
        Mint
      </Button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            {data?.hash}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}