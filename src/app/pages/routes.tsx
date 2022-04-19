import { Details } from './Details/Details';
import { Landing } from './Landing/Landing';

export const routes = [
	{
		path: '/',
		exact: true,
		element: <Landing />,
	},
	{
		path: '/:id',
		exact: true,
		element: <Details />,
	},
];
