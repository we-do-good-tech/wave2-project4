import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link, flexCenter } from 'shared/components';

const Wrapper = styled.div.attrs({ dir: 'rtl' })``;

const Menu = styled.ul`
  ${flexCenter};
  list-style-type: none;
  height: 50px;
  margin: 0 12px;
  padding-inline-start: 0px;
`;

const MenuItem = styled.li`
  margin: 0 5px 25px 5px;
  a {
    width: auto;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  min-width: 191px;
  max-height: 50px;
  font-size: 20px;
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

const StyledLinkText = styled.h3`
  font-style: normal;
  font-size: 20px;
  line-height: 18px;
  font-weight: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? '700' : '400')};
  text-align: center;
`;

type MenuItemType = {
  name: string;
  path: string;
};

const items: MenuItemType[] = [
  {
    name: 'משחקים פאראלימפיים',
    path: '/nihul/games',
  },
  {
    name: 'עמוד אודות',
    path: '/nihul/about',
  },
  {
    name: 'מידע לצוות החינוכי',
    path: '/nihul/info',
  },
  {
    name: 'עמוד הנבחרת',
    path: '/nihul/team',
  },
  {
    name: 'ענפי הספורט',
    path: '/nihul/sports',
  },
  {
    name: 'וידאו',
    path: '/nihul/video',
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
              <StyledLinkText $isActiveItem={location.pathname === i.path}>{i.name}</StyledLinkText>
            </StyledLink>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};
export default SideBar;
