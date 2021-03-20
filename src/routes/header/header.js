import React, { Component } from 'react';

import { Grid } from '../../components/Grid.components';
import { Boxed } from '../../components/Boxed.components';
import { Text } from '../../components/Text.components';
import { Theme } from '../../utils/theme';

import APP_LOGO from '../../assets/img/logo512.png';

export class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		// state props recieved
		const { cartList } = this.props;

		//dispatch props received
		const { redirect } = this.props;

		return (
			<Grid
				pad='0.5rem'
				desktop='repeat(3,1fr)'
				tablet='repeat(3,1fr)'
				mobile='repeat(3,1fr)'
			>
				<Boxed display='flex'>
					<img
						alt='cart-app-logo'
						src={APP_LOGO}
						height='40px'
						onClick={() => redirect('/')}
					/>
					<Text
						margin='auto 1rem'
						cursor='pointer'
						onClick={() => redirect('/')}
					>
						Rocket Application
					</Text>
					<Text
						cursor='pointer'
						margin='auto 1rem'
						onClick={() => redirect('/my-cart')}
					>
						<span
							style={{
								color:
									cartList.length > 0
										? Theme.PrimaryColor
										: Theme.SecondaryTextColor,
							}}
						>
							{cartList.length}
						</span>{' '}
						<i className='icon icon-basket' />
					</Text>
				</Boxed>
				<div />
			</Grid>
		);
	}
}
