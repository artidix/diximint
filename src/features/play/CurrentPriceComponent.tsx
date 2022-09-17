import React from "react"
import { useContractRead } from 'wagmi'
import {abi } from '../../common/chainclient'
import {CONTRACT_ADDRESS} from '../../common/app.config'

export const CurrentPriceComponent = () => {
  const { data, isError, isLoading } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: 'getCurrentPrice',
  })

  // const read = useContractRead({addressOrName: address, contract});
  // addressOrName, contractInterface, functionName, args, chainId: chainId_, overrides, cacheOnBlock, cacheTime, 
  // enabled: enabled_, isDataEqual, select, staleTime, suspense, watch, onError, onSettled, onSuccess,

  return(
    <React.Fragment>
      Ξ current price {data}
    </React.Fragment>
  )
}