import './App.css';
import React, { Suspense } from 'react';
import Client from './L2/Index';
import { Route, Switch } from 'react-router-dom';
//const Amazon = React.lazy(() => import('./L2/Index'));

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/">
					<Suspense fallback={<div>Loading...</div>}>
						<Client />
					</Suspense>
				</Route>
				<Route path="/shopclues">
					<Suspense fallback={<div>Loading...</div>}>
						<Client />
					</Suspense>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
