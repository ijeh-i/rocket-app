import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { calcViewMode } from '../utils/utils';

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.default};

  ${(props) =>
    props.padHorizontal &&
    css`
      grid-column-gap: ${(props) => props.padHorizontal};
    `}
  ${(props) =>
    props.padVertical &&
    css`
      grid-row-gap: ${(props) => props.padVerical};
    `}

  grid-gap: ${(props) => props.pad};
  ${(props) =>
    props.autoRow &&
    css`
      grid-auto-rows: ${(props) => props.autoRow};
    `}

  ${props => (props.desktop && (calcViewMode() === 'desktop')) && css`
    grid-template-columns: ${(props) => props.desktop};   
  `}
  ${props => (props.tablet && (calcViewMode() === 'tablet')) && css`
    grid-template-columns: ${(props) => props.tablet};   
  `}
  ${props => (props.mobile && (calcViewMode() === 'mobile')) && css`
    grid-template-columns: ${(props) => props.mobile};
  `}
`;

Grid.defaultProps = {
  default: 'repeat(6, 1fr)',
  mobile: '1fr',
  desktop: 'repeat(3, 1fr)',
  tablet: 'repeat(2, 1fr)',
  pad: '0',
  padHorizontal: '10px',
};

Grid.propTypes = {
  default: PropTypes.string,
  mobile: PropTypes.string,
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  pad: PropTypes.string,
  padHorizontal: PropTypes.string,
  padVertical: PropTypes.string,
  autoRow: PropTypes.string,
};