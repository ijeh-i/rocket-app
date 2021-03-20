import styled from 'styled-components';
import { Theme } from '../../../utils/theme';

export const StyledCard = styled.div`
	padding: 0.5rem;
	margin: 0.5rem;
	border-radius: ${Theme.SecondaryRadius};
	display: flex;
	flex-wrap: wrap;

	:hover {
		background: ${Theme.SecondaryDark};
	}
`;
