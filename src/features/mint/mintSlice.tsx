import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type NFTStatus = 'none' | 'requested' | 'minted';

export type MintState = {
  phrase: string;
  nftStatus: NFTStatus;
}

const initialState: MintState = {
  phrase: '',
  nftStatus: 'none'
}

export const mintSlice = createSlice({
  name: 'pref',
  initialState,
  reducers: {
    requestMint: (state, action: PayloadAction<string>) => {
      state.phrase = action.payload;
      state.nftStatus = 'requested';
    },
  },
});

export const {requestMint} = mintSlice.actions

export default mintSlice.reducer