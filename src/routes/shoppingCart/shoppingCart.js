import React, { Component } from 'react';

import { Grid } from '../../components/Grid.components';
import { Boxed } from '../../components/Boxed.components';
import { Text } from '../../components/Text.components';
import { Theme } from '../../utils/theme';
import { Button } from '../../components/Button.components';
import { Redirect } from 'dva/router';
import { formatCurrency } from '../../utils/utils';

export class ShoppingCart extends Component {
	constructor() {
		super();
		this.state = {
			minQuantity: 1,
			maxQuantity: 10,
		};
	}

	handleQuantity = (index, action) => {
		const { cartList, saveShop } = this.props;
		let newCartList = [...cartList];
		switch (action) {
			case 'add':
				newCartList[index] && (newCartList[index].quantity += 1);
				break;
			case 'substract':
				newCartList[index] && (newCartList[index].quantity -= 1);
				break;
			default:
				break;
		}
		saveShop({ cartList: [...newCartList] });
	};

	removeItem = (index) => {
		const { cartList, saveShop } = this.props;
		let newCartList = [...cartList];
		newCartList.splice(index, 1);
		saveShop({ cartList: [...newCartList] });
	};

	onCheckout = () => {
		const { cartList } = this.props;
		let data = cartList.map((item) => ({
			itemId: item.id,
			quantity: item.quantity,
		}));
		console.log(data);
	};

	render() {
		// state props recieved
		const { cartList } = this.props;
		// dispatch props recieved
		const { redirect } = this.props;

		const { minQuantity, maxQuantity } = this.state;
		let mainTotal = 0;

		return (
			<Boxed>
				<Boxed pad='10px 20px'>
					<Grid desktop='auto 350px' tablet='auto 200px' mobile='repeat(1,1fr)'>
						<Boxed
							background={Theme.SecondaryDark}
							borderRadius={Theme.SecondaryRadius}
							pad='2rem'
						>
							<Text> My Cart item(s) : {cartList.length}</Text>

							{cartList &&
								cartList.map((item, index) => {
									let unitPrice = item.cost_per_launch
										? item.cost_per_launch
										: 0;
									let totalPrice = item.quantity
										? item.quantity * unitPrice
										: 0;
									mainTotal += totalPrice;
									return (
										<Boxed
											key={index}
											margin='1rem 0'
											pad='0.5rem'
											borderRadius={Theme.SecondaryRadius}
											background={'#ffffff'}
										>
											<Grid
												desktop='150px auto 50px'
												tablet='150px auto 50px'
												mobile='150px auto 50px'
											>
												<Boxed>
													<img
														margin='auto 0'
														src={item.flickr_images[0]}
														height='auto'
														width='145px'
														alt={item.name}
													/>
												</Boxed>
												<Boxed display='flex'>
													<Boxed margin='auto 0'>
														<Text color={Theme.PrimaryColor}>{item.name}</Text>
														<Text padding='0.25rem 0'>{item.description}</Text>
														<Text>
															Cost Per Launch:{' '}
															<b>$ {formatCurrency(unitPrice)}</b>
														</Text>
														<Boxed pad='0.5rem 0' display='flex'>
															<Text margin='auto 0 ' padding='0 0.5rem 0 0 '>
																Number of Launch :{' '}
															</Text>
															<Button
																xs
																pale
																disabled={item.quantity === minQuantity}
																color={
																	item.quantity === minQuantity
																		? '#b9b9b9'
																		: Theme.PrimaryBlue
																}
																onClick={() =>
																	this.handleQuantity(index, 'substract')
																}
															>
																{' '}
																-{' '}
															</Button>{' '}
															<Text margin='auto 0 ' padding='0 0.5rem'>
																{item.quantity ? item.quantity : 0}{' '}
															</Text>
															<Button
																xs
																pale
																disabled={item.quantity === maxQuantity}
																color={
																	item.quantity === maxQuantity
																		? '#b9b9b9'
																		: Theme.PrimaryBlue
																}
																onClick={() =>
																	this.handleQuantity(index, 'add')
																}
															>
																{' '}
																+{' '}
															</Button>
														</Boxed>
														<Text>
															Sub Total: <b>₦ {formatCurrency(totalPrice)}</b>
														</Text>
													</Boxed>
												</Boxed>
												<Boxed display='flex'>
													<Button
														margin='auto'
														xs
														onClick={() => this.removeItem(index)}
													>
														<i className='icon icon-trash' />
													</Button>
												</Boxed>
											</Grid>
										</Boxed>
									);
								})}
							{cartList.length === 0 ? (
								<Text padding='1rem 0'>
									{' '}
									Cart is empty, please select items from the{' '}
									<span
										onClick={() => redirect('/')}
										style={{ cursor: 'pointer', color: Theme.PrimaryBlue }}
									>
										shop list
									</span>
									.
								</Text>
							) : (
								<Boxed>
									<Boxed>
										<Text
											margin='0 0 0 auto'
											padding='1rem 0'
											fontSize='22px'
											color={Theme.PrimaryTextColor}
											align='right'
										>
											Total :{' '}
											<b>₦ {formatCurrency(mainTotal ? mainTotal : 0)}</b>
										</Text>
									</Boxed>
									<Boxed display='flex'>
										<Button pale onClick={() => redirect('/')}>
											Back to Rockets
										</Button>
										<Button
											onClick={() => this.onCheckout()}
											style={{ margin: '0 0 0 auto' }}
										>
											Proceed to Checkout
										</Button>
									</Boxed>
								</Boxed>
							)}
						</Boxed>
					</Grid>
				</Boxed>
			</Boxed>
		);
	}
}
