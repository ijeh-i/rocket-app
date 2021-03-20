import { Grid } from '../../../components/Grid.components';
import { Button } from '../../../components/Button.components';
import { Boxed } from '../../../components/Boxed.components';
import { Text } from '../../../components/Text.components';
import { Theme } from '../../../utils/theme';
import { formatDate } from '../../../utils/utils';
import { StyledCard } from './style';

export const SuccessRate = (props) => {
	let success_rate_pct = props.value ? props.value : 0;
	let rateColor = Theme.PrimaryRed;
	success_rate_pct > 29 && (rateColor = Theme.PrimaryOrange);
	success_rate_pct > 59 && (rateColor = Theme.PrimaryGreen);
	return <span style={{ color: rateColor }}> {success_rate_pct} %</span>;
};

export const ItemCard = (props) => {
	// state props received.
	const { itemDetail, cartList } = props;

	// Dispatch props recieved.
	const { saveShop, redirect } = props;

	let cartIndex = cartList.findIndex((item) => item.id === itemDetail.id);

	const addToCart = (data) => {
		saveShop({ cartList: [...cartList, { ...data, quantity: 1 }] });
	};

	const removeInCart = (data) => {
		if (cartIndex > -1) {
			let newList = [...cartList];
			newList.splice(cartIndex, 1);
			saveShop({ cartList: [...newList] });
		}
	};

	let isInCart = cartIndex > -1;

	return (
		<StyledCard>
			<Boxed>
				<img
					src={itemDetail.flickr_images && itemDetail.flickr_images[0]}
					alt={itemDetail && itemDetail.name}
					width='100%'
					style={{ maxHeight: '270px', cursor: 'pointer' }}
					onClick={() => redirect(`/rocket/${itemDetail.id}`)}
				/>
			</Boxed>
			<Boxed margin='auto 0 0 0' width='100%'>
				<Text color={Theme.PrimaryTextColor} cursor='pointer'>
					Name : <b>{itemDetail && itemDetail.name}</b>
				</Text>
				<Grid
					margin='auto 0 0 0'
					desktop='auto 60px'
					tablet='auto 60px'
					mobile='auto 60px'
				>
					<Boxed pad='0.5rem 0'>
						<Text margin='auto 0' color={Theme.SecondaryTextColor}>
							First Flight : {itemDetail && formatDate(itemDetail.first_flight)}{' '}
						</Text>
						<Text>
							Sucess Rate : <SuccessRate value={itemDetail.success_rate_pct} />
						</Text>
					</Boxed>
					<Boxed display='flex'>
						<Button
							margin='auto'
							color={isInCart ? Theme.PrimaryBlue : Theme.PrimaryColor}
							xs
							pale
							onClick={
								!isInCart
									? () => addToCart(itemDetail)
									: () => removeInCart(itemDetail)
							}
						>
							{' '}
							{isInCart ? '-' : '+'} <i className='icon icon-basket' />
						</Button>
					</Boxed>
				</Grid>
			</Boxed>
		</StyledCard>
	);
};
