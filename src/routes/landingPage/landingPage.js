import React, { Component } from 'react';

import { Grid } from '../../components/Grid.components';
import { Boxed } from '../../components/Boxed.components';
import { Loader } from '../../components/Loader.components';
import { Text } from '../../components/Text.components';

import ItemCard from './itemCard/index';

export class LandingPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		this.props.getAllShopItems({ offset: 0, limit: 100 });
	}

	render() {
		// state props recieved
		const { itemList, loadingList } = this.props;

		return (
			<Boxed>
				<Boxed pad='10px 20px'>
					<Text>Rocket List </Text>
					{loadingList ? (
						<Boxed minHeight='20vh' display='flex' width='100%'>
							{' '}
							<Loader margin='auto' />{' '}
						</Boxed>
					) : (
						<Grid
							desktop='repeat(5, 1fr)'
							tablet='repeat(3,1fr)'
							mobile='repeat(2,1fr)'
						>
							{itemList &&
								itemList.map((item, index) => (
									<ItemCard itemDetail={item} key={index} />
								))}
						</Grid>
					)}
				</Boxed>
			</Boxed>
		);
	}
}
