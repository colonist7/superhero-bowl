import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { ICatalogReducer } from '../types/reducersTypes';
import { SET_CATALOG_CONTENT } from '../actions/catalog.action';

const initialState: ICatalogReducer = {
	content: [],
	page: 0,
	perPage: 12,
	total: 0,
};

//@ts-ignorets-ignore
export const catalogReducer: Reducer<ICatalogReducer, AnyAction> = (
	state: ICatalogReducer = initialState,
	action: AnyAction
) => {
	switch (action.type) {
		case SET_CATALOG_CONTENT:
			return { ...state, content: action.payload };
		default:
			return state;
	}
};
