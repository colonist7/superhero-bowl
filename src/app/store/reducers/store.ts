import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { catalogReducer } from './catalogReducer';

export const store = configureStore({
	reducer: {
		catalogReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
