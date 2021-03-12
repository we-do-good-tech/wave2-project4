import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';
import { Scrollbars } from 'rc-scrollbars';
import { Scrollers, BackgroundWrapper, BackgroundWhiteWrapper } from 'shared/components/';
import Link from 'shared/components/Link';
import goldLogo from '../../assets/images/gold_logo.png';
import firebase from '../../firebase';

const StyledHeader = styled.header`
  display: grid;
  margin-top: 2%;
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

const StyledLink = styled(Link)`
  max-width: 191px;
  max-height: 50px;
  font-size: 20px;
  margin-top: 2%;
  font-weight: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? '700' : '400')};
  text-decoration: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 'underline' : 'none')};
  color: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.link.nihul.active.color : theme.link.nihul.normal.color};
  border-radius: 50px;
  &:hover {
    text-decoration: underline;
    color: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
      $isActiveItem ? theme.link.nihul.active.color : theme.link.nihul.hover.color};
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

const H3 = styled.h3`
  font-size: 18px;
  color: #112f78;
  font-weight: 700;
  line-hight: 23.54px;
  text-align: center;
  margin: 0;
`;

const H2 = styled.h2`
  font-family: Assistant;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
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
  justify-content: center;
  direction: rtl;
`;

const TeamMember = styled.div`
  min-height: 184px;
  text-align: center;
  flex: 0 0 20%;
`;

const Avatar = styled.div<{ image?: string }>`
  background: ${(props) => `url(${props.image})`} no-repeat;
  background-size: cover;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  margin: 0 auto;
`;

const Team = () => {
  const { thumbVertical, trackVertical } = Scrollers;
  const itemsRef = firebase.database().ref('team');
  const [teamDescription, setTeamDescription] = useState();
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    if (!teamMembers) setTeamMembers([]);
    itemsRef.once('value').then((snapshot: any) => {
      setTeamDescription(snapshot.val()?.teamDescription || '');
      if (!isEqual(teamMembers, snapshot.val()?.teamMembers) && snapshot.val()?.teamMembers)
        setTeamMembers(snapshot.val()?.teamMembers);
    });
  }, [itemsRef, teamMembers]);

  return (
    <BackgroundWrapper>
      <BackgroundWhiteWrapper>
        <StyledLink $isActiveItem={false} to="availableGames/nir">
          חזרה
        </StyledLink>
        <StyledHeader>
          <div>
            <H2>נעים להכיר, המשלחת הפראלימפית הישראלית </H2>
            <H1>{teamDescription}</H1>
          </div>
          <img src={goldLogo} alt="לוגו שווים זהב" />
        </StyledHeader>
        <MainWrapper>
          <Scrollbars renderThumbVertical={thumbVertical} renderTrackVertical={trackVertical} hideTracksWhenNotNeeded>
            <Main>
              {teamMembers.map((member: any, index: number) => {
                if (!member.image || !member.name || !member.sports) {
                  return;
                }
                return (
                  <TeamMember key={index}>
                    <Avatar image={member.image} />
                    <H3>{member.name}</H3>
                    <P>{member.sports}</P>
                  </TeamMember>
                );
              })}
            </Main>
          </Scrollbars>
        </MainWrapper>
      </BackgroundWhiteWrapper>
    </BackgroundWrapper>
  );
};

export default Team;
