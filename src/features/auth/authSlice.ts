import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { loginThunk } from './loginThunk'
import { setChainThunk } from './setChainThunk'

interface AuthState {
    user: string | null,
    chainId: Number
}

const initialState: AuthState = {
    user: null,
    chainId: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        console.log('login', action.payload);
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
    },
    
    extraReducers: (builder) => { 
      builder.addCase(loginThunk.pending, (state) => {
        state.user = null;
      });

      builder.addCase(loginThunk.rejected, (state) => {
        state.user = null;
      });

      builder.addCase(loginThunk.fulfilled, (state, action) => {
        // @! check action.meta
        console.log('action.meta.requestId', action.meta.requestId);
        console.log('action.meta.requestStatus', action.meta.requestStatus);
        if (action.payload) {
          state.user = action.payload;
        }
      });

      builder.addCase(setChainThunk.pending, (state) => {
        state.chainId = 0;
      });

      builder.addCase(setChainThunk.rejected, (state) => {
        state.chainId = 0;
      });

      builder.addCase(setChainThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.chainId = action.payload;
        }
      });
    }
  });
  
  export const { login, logout } = authSlice.actions
  
  export const currentUserSelector = (state: RootState) => state.auth.user
  export const currentChainSelector = (state: RootState) => state.auth.chainId
  
  export default authSlice.reducer