import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from 'ethers';
declare let window: any;

export const setChainThunk = createAsyncThunk('setChainThunk', async () => {
  const { ethereum } = window;
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    const chainString = network.name + "(" + network.chainId + ")";
    console.log('playing on', chainString);

    return network.chainId;
  }
  else {
    return null;
  }
});