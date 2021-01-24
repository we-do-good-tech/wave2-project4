import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link } from 'shared/components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  display: grid;
  box-sizing: border-box;
  grid-template-rows: 50px;
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  cursor: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 'default' : 'pointer')};
  &:hover {
    text-decoration: none;
  }
`;

const StyledLinkText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  text-align: center;
`;

type MenuItemType = {
  name: string;
  path: string;
};

const items: MenuItemType[] = [
  {
    name: 'Homepage',
    path: '/',
  },
  {
    name: 'Information',
    path: '/information',
  },
  {
    name: 'Game',
    path: '/game',
  },
];

const SideBar = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Menu>
        {items.map((i: MenuItemType) => (
          <MenuItem key={i.name}>
            <StyledLink to={i.path} $isActiveItem={location.pathname === i.path}>
              <StyledLinkText>{i.name}</StyledLinkText>
            </StyledLink>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};
export default SideBar;
