import { createAsyncThunk } from "@reduxjs/toolkit";

export type MintThunkInput = { phrase: string }
export type MintThunkResult = { id: number }

export const mintThunk = createAsyncThunk<MintThunkResult, MintThunkInput>('mintThunk', async (myInput, otherShit) => {
  console.log('THUNKING:', myInput.phrase)

  return { id: 3 };
});