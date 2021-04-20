import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';
import { Link, flexCenter, flexCenterMiddle, flexColumnCenterBottom, Flex } from 'shared/components';
import commiteeLogo from 'assets/images/commitee-logo.png';
import homepageBg from 'assets/images/homepage_bg.svg';
import unionLogo from 'assets/images/union-logo.png';
import firebase from '../../firebase';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  position: relative;
  ${flexColumnCenterBottom};
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url(${homepageBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledButton = styled(Link)`
  text-align: center;
  line-height: 1;
  width: 236px;
  height: 75px;
  font-size: 30px;
  color: ${({ theme }) => theme.button.primary.normal.color};
  background: ${({ theme }) => theme.button.primary.normal.background};
  border: 2px solid ${({ theme }) => theme.button.primary.normal.border};
  border-radius: 50px;
  font-weight: 600;
  outline: none !important;
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
  &:focus {
    font-weight: 700;
    border: 3px solid ${({ theme }) => theme.button.primary.hover.border};
    background: ${({ theme }) => theme.button.primary.active.background};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin-bottom: 85px;
    width: 120px;
    height: 38px;
    font-size: 15px;
  }
`;

const Circle = styled.a`
  ${flexCenterMiddle};
  border-radius: 50%;
  width: 168px;
  height: 168px;
  background: ${({ theme }) => theme.homepage.circle.background};
  border: 4px solid white;
  color: ${({ theme }) => theme.homepage.circle.color} !important;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  bottom: 7px;
  right: 10%;
  padding: 15px;
  text-align: center;
  outline: none !important;
  pointer: cursor;
  &:hover {
    text-decoration: none;
    font-weight: 800;
  }
  &:focus {
    background: ${({ theme }) => theme.homepage.circle.focus.background};
    text-decoration: none;
    font-weight: 800;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 84px;
    height: 84px;
    font-size: 12px;
  }
`;

const StyledImg = styled.img`
  height: 78px;
  margin: 5px 10px 0 10px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    height: 39px;
  }
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
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    height: 47px;
    bottom: 5px;
    min-width: unset;
  }
`;

const CtaWrapper = styled(Flex)`
  margin-bottom: 178px;
  width: 40%;
  justify-content: space-between;
  max-height: 25%;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin-bottom: 0;
  }
`;

const Homepage = () => {
  const pdfRef = firebase.database().ref('info');
  const [pdf, setPdf] = useState('');

  useEffect(() => {
    if (!pdf) setPdf('');
    pdfRef.once('value').then((snapshot: any) => {
      if (!isEqual(pdf, snapshot.val()?.pdf) && snapshot.val()?.pdf) setPdf(snapshot.val()?.pdf);
    });
  }, [pdfRef, pdf]);

  return (
    <Wrapper>
      <CtaWrapper>
        <StyledButton to="/games" $isActiveItem={false}>
          משחקים פראלימפיים
        </StyledButton>
        <StyledButton to="/game" $isActiveItem={false}>
          בואו נתחיל!
        </StyledButton>
      </CtaWrapper>
      <Footer>
        <Circle href={pdf} target="_blank">
          הסבר לצוות החינוכי
        </Circle>
        <StyledImg src={unionLogo} alt="לוגו ההתאחדות הישראלית לספורט נכים" />
        <StyledImg src={commiteeLogo} alt="לוגו הוועד הפאראלימפי הישראלי" />
      </Footer>
    </Wrapper>
  );
};

export default Homepage;
