import React from 'react';
import styled, { css } from 'styled-components';

import { Theme } from '../utils/theme';

const StyledAvatar = styled.div`
	padding: 2px;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : '100%'};
	border: 1px solid transparent;
	border-color: ${(props) =>
		props.color ? Theme.PrimaryColor : 'transparent'};
	text-align: center;
	display: inline-block;
	height: 100%;
	${(props) =>
		props.margin &&
		css`
			margin: ${props.margin};
		`}

	& img {
		paddding: 0.5px 0.5px 0 0;
		border-radius: ${(props) =>
			props.borderRadius ? props.borderRadius : '100%'};
	}
`;

export class Avatar extends React.Component {
	render() {
		return (
			<StyledAvatar
				color={this.props.color}
				borderRadius={this.props.borderRadius}
				style={this.props.style}
				margin={this.props.margin}
			>
				<img
					src={this.props.src}
					height={this.props.size}
					width={this.props.size}
					alt={this.props.alt}
				/>
			</StyledAvatar>
		);
	}
}

export const ImgPreview = styled.div`
	width: ${(props) => (props.width ? props.width : '100%')};
	hight: ${(props) => (props.height ? props.height : '100%')};
	background-image: ${(props) => (props.bgImg ? props.bgImg : '')};
`;
