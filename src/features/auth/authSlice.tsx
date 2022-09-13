import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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
    authenticate: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const {authenticate: requestMint} = mintSlice.actions

export const currentUserSelector = (s : RootState) => s.auth.currentUser

export default mintSlice.reducer