import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link } from 'shared/components';
import logo from 'assets/images/logo.png';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  background: ${({ theme }) => theme.topbar.background};
  max-height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.topbar.border};
`;

const Logo = styled.a`
  width: 198px;
  height: 55px;
  margin-top: 40px;
  margin-right: 30px;
  background-image: url(${logo});
  z-index: 1000;
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  height: 50px;
  margin: 0 16px;
  padding-inline-start: 0px;
`;

const MenuItem = styled.li`
  margin-left: 20px;
  margin-bottom: 25px;
  a {
    width: auto;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  min-width: 191px;
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
`;

const StyledAboutLink = styled(Link)`
  min-width: 133px;
  max-height: 50px;
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
`;

const StyledLinkText = styled.h3`
  font-style: normal;
  font-size: 18px;
  line-height: 23.5px;
  font-weight: inherit;
  text-align: center;
  padding: 20px 0;
  margin: 0;
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
  {
    name: 'הנבחרת',
    path: '/team',
  },
];
const itemsLeft: MenuItemType[] = [
  {
    name: 'ניהול',
    path: '/nihul',
  },
  // {
  //   name: 'אודות',
  //   path: '/information',
  // },
];

const SideBar = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Logo href="/" />
      <Menu>
        {items.map((i: MenuItemType) => (
          <MenuItem key={i.name}>
            <StyledLink to={i.path} $isActiveItem={location.pathname === i.path}>
              <StyledLinkText>{i.name}</StyledLinkText>
            </StyledLink>
          </MenuItem>
        ))}
      </Menu>
      <Menu>
        {itemsLeft.map((i: MenuItemType) => (
          <MenuItem key={i.name}>
            <StyledLink to={i.path} $isActiveItem={location.pathname === i.path}>
              <StyledLinkText>{i.name}</StyledLinkText>
            </StyledLink>
          </MenuItem>
        ))}
        <StyledAboutLink to="/information" $isActiveItem={location.pathname === '/information'}>
          אודות
        </StyledAboutLink>
      </Menu>
    </Wrapper>
  );
};
export default SideBar;
