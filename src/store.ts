import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import mintReducer from './features/mint/mintSlice';
import authReducer from './features/auth/authSlice'

export const store = configureStore({
    reducer: {
        mint: mintReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
