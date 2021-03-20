import React, { Component } from 'react';

import { Grid } from '../../components/Grid.components';
import { Boxed } from '../../components/Boxed.components';
import { Button } from '../../components/Button.components';
import { Text } from '../../components/Text.components';
import { SuccessRate } from '../landingPage/itemCard/itemCard';
import { Theme } from '../../utils/theme';
import { formatCurrency, formatDate } from '../../utils/utils';

export class RocketDetail extends Component {
	constructor() {
		super();
		this.state = {
			itemDetail: null,
		};
	}

	async componentDidMount() {
		const { itemList, match } = this.props;
		let itemID = match.params && match.params.id;

		// Check if ID exist in store
		let itemIndex = itemList.findIndex((item) => item.id === itemID);
		if (itemIndex > -1) {
			this.setState({ itemDetail: { ...itemList[itemIndex] } });
		} else {
			this.setState({ itemDetail: null });
		}
	}

	render() {
		const { itemDetail } = this.state;
		// dispatch props receieved
		const { redirect } = this.props;

		return (
			<Boxed pad='1rem'>
				<Text fontSize='22px' fontWeight='600'>
					Rocket Detail{' '}
				</Text>

				{itemDetail ? (
					<Boxed pad='10px 20px'>
						<Grid
							desktop='repeat(4,1fr)'
							tablet='repeat(3,1fr)'
							mobile='repeat(2,1fr)'
						>
							{itemDetail.flickr_images &&
								itemDetail.flickr_images.map((item, index) => {
									return (
										<Boxed pad='0.25rem'>
											<img
												key={index}
												src={item}
												alt={item}
												width='100%'
												style={{ maxHeight: '270px', cursor: 'pointer' }}
											/>
										</Boxed>
									);
								})}
						</Grid>
						<Grid desktop='130px auto' tablet='130px auto' mobile='130px auto'>
							<Text fontWeight='600' align='right' padding='0 0.5rem 0 0 '>
								name:
							</Text>
							<Text>{itemDetail.name}</Text>

							<Text fontWeight='600' align='right' padding='0 0.5rem 0 0 '>
								Description:
							</Text>
							<Text>{itemDetail.description}</Text>

							<Text fontWeight='600' align='right' padding='0 0.5rem 0 0 '>
								First Flight:
							</Text>
							<Text>
								{itemDetail.first_flight && formatDate(itemDetail.first_flight)}
							</Text>

							<Text fontWeight='600' align='right' padding='0 0.5rem 0 0 '>
								Sucess Rate:
							</Text>
							<Text>
								<SuccessRate value={itemDetail.success_rate_pct} />
							</Text>

							<Text fontWeight='600' align='right' padding='0 0.5rem 0 0 '>
								Current Status:
							</Text>
							<Text
								color={
									itemDetail.active ? Theme.PrimaryGreen : Theme.PrimaryRed
								}
							>
								{itemDetail.active ? 'ACTIVE' : 'NON-ACTIVE'}
							</Text>

							<Text fontWeight='600' align='right' padding='0 0.5rem 0 0 '>
								Cost Per launch:
							</Text>
							<Text>
								${' '}
								{formatCurrency(
									itemDetail.cost_per_launch ? itemDetail.cost_per_launch : 0
								)}
							</Text>

							<Text />
							<Text padding='0.5rem 0'>
								<a
									href={
										itemDetail.wikipedia
											? itemDetail.wikipedia
											: 'javascript:void(0);'
									}
									target='_blank'
									rel='noreferrer'
								>
									<Button xs>View In Wikipedia</Button>
								</a>
							</Text>
						</Grid>
					</Boxed>
				) : (
					<Boxed padding='2rem 0 '>
						<Text fontSize='56px' align='center'>
							404
						</Text>
						<Text fontSize='18px' align='center'>
							No Rocket Found
						</Text>
						<Text fontSize='56px' align='center'>
							<Button onClick={() => redirect('/')}>Go Home</Button>{' '}
						</Text>
					</Boxed>
				)}
			</Boxed>
		);
	}
}
