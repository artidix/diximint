import { createAsyncThunk } from "@reduxjs/toolkit";

// sample
type ThunkInputType = { wrumm: string }
type ThunkReturnType = { poo: number }

export const sampleThunk = createAsyncThunk<ThunkReturnType, ThunkInputType>('sampleThunk', async (myInput, otherShit) => {
  console.log(myInput.wrumm)

  return { poo: 3 };
});