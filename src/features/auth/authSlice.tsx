import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MintState = {
  currentUser: string | undefined;
}

const initialState: MintState = {
  currentUser: undefined
}

export const mintSlice = createSlice({
  name: 'pref',
  initialState,
  reducers: {
    requestMint: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const {requestMint} = mintSlice.actions

export default mintSlice.reducer