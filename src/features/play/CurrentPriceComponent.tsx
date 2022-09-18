import React, { useState } from "react"
import { useContractRead, usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { abi } from '../../common/chainclient'
import { CONTRACT_ADDRESS } from '../../common/app.config'
import { Box, Button, styled } from "@mui/material"
import { BigNumber, utils } from "ethers"

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const CurrentPriceComponent = () => {
  const [price, setPrice] = useState(null as string | null);
  const { data, isError, isLoading } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: 'getCurrentMintPrice',
    onSuccess(data) {
      const p = utils.formatEther(data.toString());
      console.log('Got price:', p);
      setPrice(p);
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
           current price {price} Ξ
        </Box>
        {/* <Button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>Check send</Button> */}
      </StyledBox>
    </React.Fragment>
  )
}