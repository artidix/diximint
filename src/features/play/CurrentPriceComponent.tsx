import React, { useState } from "react"
import { useContractRead, usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { abi } from '../../common/chainclient'
import { CONTRACT_ADDRESS } from '../../common/app.config'
import { Box, Button, styled } from "@mui/material"
import { BigNumber, utils } from "ethers"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { gotPrice, priceSelector } from "../price/priceSlice"

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const CurrentPriceComponent = () => {
  const dispatch = useAppDispatch();
  const currentPrice = useAppSelector(priceSelector);

  const { data, isError, isLoading } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: 'getCurrentMintPrice',
    onSuccess(data) {
      const p = utils.formatEther(data.toString());
      console.log('Got price:', p);
      dispatch(gotPrice(p));
    },
  })

  // const { config } = usePrepareSendTransaction({
  //   request: { to: '0x47B40160f72C4321E08DE8B95E262e902c991cD3', value: BigNumber.from('10000000000000000') },
  // })
  // const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)


  // const read = useContractRead({addressOrName: address, contract});
  // addressOrName, contractInterface, functionName, args, chainId: chainId_, overrides, cacheOnBlock, cacheTime, 
  // enabled: enabled_, isDataEqual, select, staleTime, suspense, watch, onError, onSettled, onSuccess,

  return (
    <React.Fragment>
      <StyledBox>
        <Box>
           <span>Current price:</span> 
           <span style={{fontWeight:'bold', color: 'purple', fontSize: '18px', paddingLeft: '.5rem'}}>Ξ</span>
           <span style={{fontWeight:'bold', color: 'green', fontSize: '18px'}}>{currentPrice}</span>
        </Box>
        {/* <Button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>Check send</Button> */}
      </StyledBox>
    </React.Fragment>
  )
}