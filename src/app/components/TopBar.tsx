import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link, flexCenter, FlexCenter } from 'shared/components';
import logo from 'assets/images/logo.png';

const Wrapper = styled.nav.attrs({ dir: 'rtl' })`
  ${flexCenter};
  background: ${({ theme }) => theme.topbar.background};
  max-height: 66px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.topbar.border};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    max-height: 33px;
    max-width: 100vw;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    max-height: 33px;
    max-width: 100vh;
  }
`;

const Logo = styled.a`
  font-size: 0;
  width: 198px;
  height: 55px;
  margin-top: 40px;
  margin-right: 30px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1000;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin-top: 20px;
    margin-right: 15px;
    width: 100px;
    height: 25px;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justufy-content: flex-end;
  height: 50px;
  margin: 0 16px;
  padding-inline-start: 0px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    height: 25px;
    margin: 0 8px;
  }
`;

const MenuItem = styled.li`
  margin-left: 20px;
  margin-bottom: 25px;
  a {
    width: auto;
    align-items: center;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin-left: 0;
    margin-right: 15px;
    margin-bottom: 7px;
  }
`;

const StyledLink = styled(Link)`
  min-width: 191px;
  outline: none !important;
  max-height: 50px;
  text-decoration: none;
  font-weight: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 700 : 600)};
  color: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.link.primary.active.color : theme.link.primary.normal.color};
  background: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.link.primary.active.background : theme.link.primary.normal.background};
  border: 1px solid ${({ theme }) => theme.link.primary.normal.border};
  border-radius: 50px;

  &:hover {
    font-weight: 700;
    text-decoration: none;
    background: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
      $isActiveItem ? theme.link.primary.active.background : theme.link.primary.hover.background};
    color: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
      $isActiveItem ? theme.link.primary.active.color : theme.link.primary.hover.color};
  }
  &:focus {
    font-weight: 700;
    text-decoration: none;
    background: ${({ theme }: { theme: any }) => theme.link.primary.active.background};
    color: ${({ theme }: { theme: any }) => theme.link.primary.active.color};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    min-width: 95px;
    max-height: 25px;
  }
`;

const StyledAboutLink = styled(Link)`
  min-width: 133px;
  max-height: 50px;
  outline: none !important;
  text-align: center;
  color: ${({ theme }) => theme.link.secondary.normal.color};
  font-weight: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? '700' : 'normal')};
  background: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.link.secondary.active.background : theme.link.secondary.normal.background};
  border-width: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 1 : 0)}px;
  border-style: solid;
  border-radius: 50px;
  text-decoration: none;
  font-weight: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 700 : 600)};
  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.link.secondary.normal.color};
    text-decoration: none;
  }
  &:focus {
    font-weight: 700;
    border-width: 1px;
    background: ${({ theme }) => theme.link.secondary.active.background};
    color: ${({ theme }) => theme.link.secondary.normal.color};
    text-decoration: none;
  }
  &:active {
    font-weight: 700;
    background: ${({ theme }) => theme.link.secondary.active.background};
    color: ${({ theme }) => theme.link.secondary.normal.color};
    text-decoration: none;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    min-width: 67px;
    max-height: 25px;
  }
`;

const StyledLinkText = styled.h3`
  font-style: normal;
  font-size: 18px;
  line-height: 23.5px;
  font-weight: inherit;
  text-align: center;
  padding: 20px 0;
  margin: 0;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 12px;
    line-height: 17x;
    padding: 20px 10px;
  }
`;

const RightWrapper = styled(FlexCenter)`
  display: flex;
  align-items: center;
`;

const StyledListItem = styled.li`
  display: flex;
`;

type MenuItemType = {
  name: string;
  path: string;
};

const items: MenuItemType[] = [
  {
    name: 'משחקים פאראלימפיים',
    path: '/games',
  },
  {
    name: 'בואו נשחק!',
    path: '/game',
  },
  // {
  //   name: 'הנבחרת',
  //   path: '/team',
  // },
];
const itemsLeft: MenuItemType[] = [
  // {
  //   name: 'ניהול',
  //   path: '/nihul',
  // },
  // {
  //   name: 'אודות',
  //   path: '/information',
  // },
];

const SideBar = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <RightWrapper>
        <Logo href="/">Home</Logo>
        <Menu>
          {items.map((i: MenuItemType) => (
            <MenuItem key={i.name}>
              <StyledLink to={i.path} $isActiveItem={location.pathname === i.path}>
                <StyledLinkText>{i.name}</StyledLinkText>
              </StyledLink>
            </MenuItem>
          ))}
        </Menu>
      </RightWrapper>
      <RightWrapper>
        <Menu>
          {itemsLeft.map((i: MenuItemType) => (
            <MenuItem key={i.name}>
              <StyledLink to={i.path} $isActiveItem={location.pathname === i.path}>
                <StyledLinkText>{i.name}</StyledLinkText>
              </StyledLink>
            </MenuItem>
          ))}
          <StyledListItem>
            <StyledAboutLink to="/information" $isActiveItem={location.pathname === '/information'}>
              אודות
            </StyledAboutLink>
          </StyledListItem>
        </Menu>
      </RightWrapper>
    </Wrapper>
  );
};
export default SideBar;
