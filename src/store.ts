import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import mintReducer from './features/mint/mintSlice'
import priceReducer from './features/price/priceSlice'

export const store = configureStore({
    reducer: {
        mint: mintReducer,
        price: priceReducer
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
