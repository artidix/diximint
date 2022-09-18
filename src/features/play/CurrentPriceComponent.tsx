import React from "react"
import { useContractRead, usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { abi } from '../../common/chainclient'
import { CONTRACT_ADDRESS } from '../../common/app.config'
import { Box, Button } from "@mui/material"
import { BigNumber } from "ethers"

export const CurrentPriceComponent = () => {
  console.log('trying get price', CONTRACT_ADDRESS);
  const { data, isError, isLoading } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: 'getCurrentPrice'
  })
  console.log('!!!!', data);

  // const { config } = usePrepareSendTransaction({
  //   request: { to: '0x47B40160f72C4321E08DE8B95E262e902c991cD3', value: BigNumber.from('10000000000000000') },
  // })
  // const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)


  // const read = useContractRead({addressOrName: address, contract});
  // addressOrName, contractInterface, functionName, args, chainId: chainId_, overrides, cacheOnBlock, cacheTime, 
  // enabled: enabled_, isDataEqual, select, staleTime, suspense, watch, onError, onSettled, onSuccess,

  return (
    <React.Fragment>
      <Box>
        <Box>
          Ξ current price
        </Box>
        {/* <Button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>Check send</Button> */}
      </Box>
    </React.Fragment>
  )
}