import styled from 'styled-components';
import { Link } from 'shared/components';

export const SkipLink = styled(Link)`
  background: #e77e23;
  height: 30px;
  left: 50%;
  padding: 8px;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
  z-index: 1;
  color: white;
  &:focus {
    transform: translateY(0%);
  }
`;
