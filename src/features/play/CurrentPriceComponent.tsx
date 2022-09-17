import React from "react"
import { useContractRead } from 'wagmi'
import {abi } from '../../common/chainclient'

export const CurrentPriceComponent = () => {
  const { data, isError, isLoading } = useContractRead({
    addressOrName: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    contractInterface: abi,
    functionName: 'getHunger',
  })

  // const read = useContractRead({addressOrName: address, contract});
  // addressOrName, contractInterface, functionName, args, chainId: chainId_, overrides, cacheOnBlock, cacheTime, 
  // enabled: enabled_, isDataEqual, select, staleTime, suspense, watch, onError, onSettled, onSuccess,

  return(
    <React.Fragment>
      Ξ current price
    </React.Fragment>
  )
}