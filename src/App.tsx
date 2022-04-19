import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { routes } from './routes';
import './App.css';
import { useDispatch } from 'react-redux';
import { getCatalogContent } from './app/store/actions/catalog.action';

const useFetch = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getContent = () => {
			try {
				dispatch(getCatalogContent({ limit: 10 }));
			} catch (err: any) {
				throw new Error(err);
			}
		};

		getContent();
	}, []);
};

function App() {
	//REMOVE IT LATER
	useFetch();

	return (
		<div className='App'>
			<Router>
				<Link to='/'>home</Link>
				<Link to='/Thor'>Thor</Link>
				<Routes>
					{routes.map((route, i) => (
						<Route key={i} {...route} />
					))}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
