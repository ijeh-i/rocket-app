import styled, { css } from 'styled-components';
// import registrationBG from '../assets/img/dark_background_web.png';

import { Theme } from '../utils/theme';

export const LandingWrapper = styled.div`
  background-color: ${Theme.PrimaryDark};
  min-height: 100vh;
  height: fit-content;

  & > div {
    height: 100vh;
  }
`;

export const LandingContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;

  margin: auto;

  @media screen and (max-width: 575px) {
    height: unset;
    overflow-y: scroll;
    position: unset;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Title = styled.h3`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : Theme.SecondaryFontFamily};
  margin: 0;
  padding: 0.25rem 0;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  color: ${(props) => (props.color ? props.color : '#314659')};
  ${(props) =>
    props.lineHeight &&
    css`
      line-height: ${(props) => props.lineHeight};
    `}
`;

export const Link = styled.a`
  color: ${(props) => (props.color ? props.color : Theme.PrimaryFontColor)};
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export const HR = styled.hr`
  color: ${(props) => (props.color ? props.color : Theme.PrimaryTextColor)};
  margin: ${(props) => (props.margin ? props.margin : '0.75rem 0')};
  padding: 0;
  border: 0;
  border-bottom: 0.5px solid
    ${(props) => (props.color ? props.color : Theme.PrimaryTextColor)};
  height: 0.5px;
`;

export const Icon = styled.i`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  color: ${(props) => (props.color ? props.color : Theme.PrimaryColor)};
  & :before {
    margin: 0 auto;
  }
  padding: ${(props) => (props.pad ? props.pad : '0')};
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
    ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `}

    ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}
`;

export const PreviewImage = styled.div`
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : '203px')};
  background: ${(props) => (props.background ? props.background : '#ececec')};
  text-align: center;
  position: relative;

  & > img {
    height: ${(props) => (props.height ? props.height : '203px')};
    width: 100%;
  }

  & .overlay {
    display: none;
    background-color: #eeeeee80;
    height: auto;
    text-align: center;
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
    margin: auto;
    border: 1.5px dashed #ccc;

    & > i {
      font-size: 30px;
      padding: 10px;
    }
    & > p {
      margin: 0;
      font-size: 13px;
    }
  }

  :hover .overlay {
    display: Grid;
  }

  & .remove-item {
    display: none;
    position: absolute;
    top: 5%;
    right: 5%;
  }

  :hover .remove-item {
    border-radius: 100%;
    display: flex;
    padding: 0.25rem;
  }
`;

export const StyledDrpDown = styled.div`
  .dropdown-toggle {
    padding: 0;
  }
  .dropdown-toggle::after {
    content: unset;
  }

  .dropdown-toggle:focus {
    box-shadow: unset;
  }

  .dropdown-menu.show {
    background: ${Theme.SecondaryDark};
  }

  .dropdown-item {
    color: ${Theme.PrimaryFontColor};
    font-size: 13px;
  }
`;

export const LiveView = styled.div`
  display: flex;
  .main-view {
    position: relative;
    width: ${(props) => (props.collapse ? '100%' : 'calc(100% - 300px)')};

    .live-icons {
      position: absolute;
      z-index: 1;
    }

    .live-icons-left {
      top: 2.5px;
      left: 2.5px;
    }
    .live-icons-right {
      top: 2.5px;
      right: 2.5px;
    }
  }

  .side-view {
    width: 300px;
    ${(props) =>
      props.collapse &&
      css`
        display: none;
        width: 0;
      `}
  }
`;
