import React from 'react';
import App from './routes/app';
import { Route, Switch, routerRedux } from 'dva/router';

import LandingPage from './routes/landingPage';
import ShoppingCart from './routes/shoppingCart';
import RocketDetail from './routes/rocketDetail';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
	return (
		<ConnectedRouter history={history}>
			<App history={history}>
				<Switch>
					<Route 
						path='/'
						exact
						children={({ match, ...rest }) => {
							return <LandingPage />;
						}}
					/>
					<Route
						path='/my-cart'
						exact
						children={({ match, ...rest }) => {
							return <ShoppingCart />;
						}}
					/>
					<Route
						path='/rocket/:id'
						exact
						children={({ match, ...rest }) => {
							console.log(match);
							return <RocketDetail match={match} />;
						}}
					/>
				</Switch>
			</App>
		</ConnectedRouter>
	);
}

export default RouterConfig;
