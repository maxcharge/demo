import './App.css';
import React, { Suspense } from 'react';
//import Client from './L2/Index';
import { Route, Switch } from 'react-router-dom';
let clientName = "amazon";
clientName =window.location.pathname === '/shopclues'
	? "shopclues"
	: "amazon"

  const Client = React.lazy(() => import(`./L2/MyComponent/${clientName}/MyComponent`));

function App() {
	console.log(Client);
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
