import { Dispatch } from 'react';
import concatenate from '../../utils/concatenate';
import * as ApiHandler from '../resources/catalog/catalogApiHandler';

const actionName = concatenate('catalog');

export const SET_CATALOG_CONTENT = actionName('SET_CATALOG_CONTENT');

export const setCatalogContent = (details: any) => {
	return { type: SET_CATALOG_CONTENT, payload: details };
};

export const getCatalogContent = (options: any) => async (dispatch: Dispatch<any>) => {
	try {
		const content: any = await ApiHandler.getCatalog(options);
		if (!!content && !!content.data) {
			dispatch(setCatalogContent(content.data.results));
		}
	} catch (err: any) {
		throw new Error(err);
	}
};
