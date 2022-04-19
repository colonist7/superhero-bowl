import axios from 'axios';
import { buildQuery } from '../../../utils/buildQuery';
import config from './config';
import { Md5 } from 'ts-md5';

const apikey = '222db0ca1367107479526eed06b3de9f';
const privateKey = 'dac25afaeedd524ef1398680124335f8b27f0e01';

export const getCatalog = (options: any) => {
	const ts = new Date().getTime();
	const hash = Md5.hashStr(ts + privateKey + apikey).toString();
	const configuartion = {
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
		},
	};

	return axios.get(`${config.url_catalog_content}${buildQuery({ ts, apikey, hash, ...options })}`, configuartion);
};
// developer.marvel.com
