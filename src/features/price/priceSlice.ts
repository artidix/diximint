import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type MintState = {
  price?: string;
}

const initialState: MintState = {
}

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    gotPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
  },
});

export const {gotPrice} = priceSlice.actions

export const priceSelector = (s: RootState) => s.price.price

export default priceSlice.reducer