import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { flexColumnCenter } from '../Flex';

export const Link = styled(NavLink)`
  ${flexColumnCenter};
  cursor: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 'default' : 'pointer')};
`;
