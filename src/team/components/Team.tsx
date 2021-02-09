import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'rc-scrollbars';
import goldLogo from '../../assets/images/gold_logo.png';
import bg from '../../assets/images/teamBg.svg';
import { Scrollers } from '../../shared/components/index';

/* import { Flex } from '../../shared/components/Flex/Flex'; */

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  flex: 1;
  background: url(${bg}), linear-gradient(0deg, #6acfff 0%, #0071bc 100%);
`;

const WhiteWapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(2, 27, 91, 0.25);
  width: 84%;
  margin: 0 auto;
  height: 100%;
  flex: 0 0 84%;
  text-align: center;
  direction: ltr;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  display: grid;
  margin-top: 4%;
  grid-template-columns: auto auto auto auto auto;
  direction: rtl;
  flex: 0 0 20%;
  height: 20%;
  & div {
    display: inline-grid;
    grid-column-start: 3;
    grid-column-end: 5;
  }
`;

const H1 = styled.h1`
  font-weight: 700;
  font-style: normal;
  font-size: 63px;
  line-height: 82.4px;
  color: #112f78;
  margin: 0;
`;

const H2 = styled.h2`
  font-size: 28px;
  color: #112f78;
  font-weight: 600;
  margin: 0;
`;

const H3 = styled.h3`
  font-size: 18px;
  color: #112f78;
  font-weight: 700;
  line-hight: 23.54px;
  text-align: center;
  margin: 0;
`;

const P = styled.p`
  font-size: 18px;
  color: #112f78;
  text-align: center;
  font-weight: 400;
  line-hight: 23.54px;
  margin: 0;
`;

const MainWrapper = styled.div`
  height: 80%;
  flex: 1 1 80%;
`;

const Main = styled.main`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 50px;
  justify-content: space-between;
  direction: rtl;
`;

const TeamMember = styled.div`
  min-height: 184px;
  text-align: center;
  flex: 0 0 20%;
`;

const Avatar = styled.div`
  width: 124px;
  height: 124px;
  background: #c4c4c4;
  border-radius: 50%;
  margin: 0 auto;
`;

const teamMembers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Team = () => {
  const { thumbVertical, trackVertical } = Scrollers;

  return (
    <Wrapper>
      <WhiteWapper>
        <StyledHeader>
          <div>
            <H2>נעים להכיר, המשלחת הפראלימפית הישראלית </H2>
            <H1>טוקיו 2021 </H1>
          </div>
          <img src={goldLogo} alt="logo" />
        </StyledHeader>
        <MainWrapper>
          <Scrollbars renderThumbVertical={thumbVertical} renderTrackVertical={trackVertical} hideTracksWhenNotNeeded>
            <Main>
              {teamMembers.map((member) => (
                <TeamMember key={member}>
                  <Avatar />
                  <H3>חבר צוות א</H3>
                  <P>טניס</P>
                </TeamMember>
              ))}
            </Main>
          </Scrollbars>
        </MainWrapper>
      </WhiteWapper>
    </Wrapper>
  );
};

export default Team;
