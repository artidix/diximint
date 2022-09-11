import { createAsyncThunk } from "@reduxjs/toolkit";
declare let window: any;

export const requestLoginThunk = createAsyncThunk('requestLoginThunk', async (accounts?: string[]) => {

  if(accounts) {
    return accounts[0];
  }

  try {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Please, get MetaMask");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      return accounts[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
});