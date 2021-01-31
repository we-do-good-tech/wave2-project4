import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 'default' : 'pointer')};
`;

export default Link;
