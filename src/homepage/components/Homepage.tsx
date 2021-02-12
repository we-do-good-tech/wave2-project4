import React from 'react';
import styled from 'styled-components';
import { Link, flexCenter, flexCenterMiddle, flexColumnCenterBottom } from 'shared/components';
// import theme from 'shared/style/theme';

import logo from 'assets/images/logo-information.png';
import mapBg from 'assets/images/map_bg.svg';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  position: relative;
  ${flexColumnCenterBottom};
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledButton = styled(Link)`
  margin-bottom: 178px;
  text-align: center;
  width: 236px;
  height: 75px;
  font-size: 30px;
  color: ${({ theme }) => theme.button.primary.normal.color};
  background: ${({ theme }) => theme.button.primary.normal.background};
  border: 2px solid ${({ theme }) => theme.button.primary.normal.border};
  border-radius: 50px;
  outline: 0 !important;
  font-weight: 600;
  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.button.primary.hover.color};
    border: 2px solid ${({ theme }) => theme.button.primary.hover.border};
    text-decoration: none;
  }
  &:active {
    font-weight: 700;
    color: ${({ theme }) => theme.button.primary.active.color};
    background: ${({ theme }) => theme.button.primary.active.background};
    border: 2px solid ${({ theme }) => theme.button.primary.active.border};
  }
`;

const Circle = styled.a`
  ${flexCenterMiddle};
  border-radius: 50%;
  width: 168px;
  height: 168px;
  background: #03345a;
  border: 4px solid white;
  color: #ffffff !important;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  bottom: 7px;
  right: 10%;
  padding: 15px;
  text-align: center;
  pointer: cursor;
  &:hover {
    text-decoration: none;
    font-weight: 800;
  }
`;

const StyledImg = styled.img`
  margin: 0;
`;

const Footer = styled.div`
  ${flexCenter};
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  min-width: 1280px;
  height: 93px;
  position: fixed;
  bottom: 10px;
  left: 0;
`;

const Homepage = () => {
  console.log('hi');
  return (
    <Wrapper>
      <StyledButton to="/games" $isActiveItem={false}>
        בואו נתחיל
      </StyledButton>
      <Footer>
        <Circle
          href="https://res.cloudinary.com/dhocrufiz/image/upload/v1612562292/anpuyzdy3wwvycgvvqtg.pdf"
          target="_blank"
        >
          הסבר לצוות החינוכי
        </Circle>
        <StyledImg src={logo} />
      </Footer>
    </Wrapper>
  );
};

export default Homepage;
