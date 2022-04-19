import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCatalogContent } from '../../../store/actions/catalog.action';

export const useFetch = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getContent = () => {
			try {
				dispatch(getCatalogContent({ limit: 24 }));
			} catch (err: any) {
				throw new Error(err);
			}
		};

		getContent();
	}, []);
};
