import React from "react"
import { useContractRead } from 'wagmi'
import { abi } from '../../common/chainclient'
import { CONTRACT_ADDRESS } from '../../common/app.config'
import { Box, styled } from "@mui/material"
import { utils } from "ethers"
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

  useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: 'getCurrentMintPrice',
    onSuccess(data) {
      const p = utils.formatEther(data.toString());
      console.log('Got price:', p);
      dispatch(gotPrice(p));
    },
  })

  return (
    <React.Fragment>
      <StyledBox>
        <Box>
          <span>Current price:</span>
          <span style={{ fontWeight: 'bold', color: 'purple', fontSize: '18px', paddingLeft: '.5rem' }}>Ξ</span>
          <span style={{ fontWeight: 'bold', color: 'green', fontSize: '18px' }}>{currentPrice}</span>
        </Box>
      </StyledBox>
    </React.Fragment>
  )
}