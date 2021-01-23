import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  color: ${({ $isActiveItem, theme }: { $isActiveItem: boolean; theme: any }) =>
    $isActiveItem ? theme.colors.primary : theme.colors.link};

  &:hover {
    color: ${({
      $isActiveItem,
      theme,
    }: {
      $isActiveItem: boolean;
      theme: any;
    }) => ($isActiveItem ? theme.colors.primary : theme.colors.link)};
  }
`;

export default Link;
