import { handleFetch } from '../handler';
import * as API from './catalogApi';

export const getCatalog = (options: any) => {
	return new Promise((resolve, reject) => {
		return API.getCatalog(options)
			.then(handleFetch(resolve, reject).xthen)
			.catch(handleFetch(resolve, reject).xcatch);
	});
};
