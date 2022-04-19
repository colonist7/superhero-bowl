import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { routes } from './app/pages/routes';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Link to='/'>Home</Link>
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
