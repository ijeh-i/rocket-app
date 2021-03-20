import '../assets/fonts/fonts/fonts.css';
import '../assets/fonts/fontello/css/cart-app.css';

import React, { Component } from 'react';
import { withRouter } from 'dva/router';

import '../assets/fonts/fonts/fonts.css';
import '../assets/fonts/fontello/css/cart-app.css';

import { AlertComponent } from '../components/Alert.components';
import { Grid } from '../components/Grid.components';
import { Boxed } from '../components/Boxed.components';

import { connect } from 'dva';

import { Theme } from '../utils/theme';
import Header from './header/index';
import APP_LOGO from '../assets/img/logo512.png';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {};

	render() {
		return (
			<React.Fragment>
				<Header />
				<Boxed background={Theme.PrimaryDark}>{this.props.children}</Boxed>
				<AlertComponent
					stack={{ limit: 3, spacing: 10 }}
					effect='slide'
					position='top-right'
					offset={10}
				/>
			</React.Fragment>
		);
	}
}

export default withRouter(connect(({ app }) => ({ app }))(App));
