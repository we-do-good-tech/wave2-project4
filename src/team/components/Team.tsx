import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';
import { Scrollbars } from 'rc-scrollbars';
import { Scrollers, BackgroundWrapper, BackgroundWhiteWrapper, flexCenter } from 'shared/components/';
import Link from 'shared/components/Link';
import goldLogo from '../../assets/images/gold_logo.png';
import firebase from '../../firebase';

const StyledHeader = styled.header.attrs({ dir: 'rtl' })`
  display: grid;
  margin-top: 2%;
  grid-template-columns: auto auto auto auto auto;
  flex: 0 0 20%;
  height: 20%;
  & div {
    display: inline-grid;
    grid-column-start: 3;
    grid-column-end: 5;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    height: 10%;
  }
`;

const StyledGoldLogo = styled.img`
  width: 136px;
  height: 132px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 68px;
    height: 66px;
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
  font-size: 63px;
  line-height: 82.4px;
  color: ${({ theme }) => theme.team.color};
  margin: 0;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 30px;
    line-height: 32px;
  }
`;

const H3 = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.team.color};
  font-weight: 700;
  line-hight: 23.54px;
  text-align: center;
  margin: 0;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 10px;
  }
`;

const H2 = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 15px;
    line-height: 17px;
  }
`;

const P = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.team.color};
  text-align: center;
  font-weight: 400;
  line-hight: 23.54px;
  margin: 0;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 12px;
  }
`;

const MainWrapper = styled.div`
  height: 80%;
  flex: 1 1 80%;
`;

const Main = styled.main.attrs({ dir: 'rtl' })`
  ${flexCenter};
  margin-top: 5%;
  flex-wrap: wrap;
  padding: 20px 50px;
`;

const TeamMember = styled.div`
  min-height: 184px;
  text-align: center;
  flex: 0 0 20%;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    min-height: 92px;
  }
`;

const Avatar = styled.div<{ image?: string }>`
  background: ${(props) => `url(${props.image})`} no-repeat;
  background-size: cover;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  margin: 0 auto;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 62px;
    height: 62px;
  }
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
          <StyledGoldLogo src={goldLogo} alt="לוגו שווים זהב" />
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
