import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { mintThunk } from "./mintTunk";

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
  name: 'mint',
  initialState,
  reducers: {
    requestMint: (state, action: PayloadAction<string>) => {
      state.phrase = action.payload;
      state.nftStatus = 'requested';
    },
    setPhrase: (state, action: PayloadAction<string>) => {
      state.phrase = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(mintThunk.pending, (state) => {
    });

    builder.addCase(mintThunk.rejected, (state) => {
    });

    builder.addCase(mintThunk.fulfilled, (state, action) => {
      if (action.payload) {
        // @! show success toast
        // @! show result
      }
    });
  }
});

export const { requestMint } = mintSlice.actions
export const { setPhrase } = mintSlice.actions

export const currentPriceSelector  = (s: RootState) => s.mint.phrase

export default mintSlice.reducer