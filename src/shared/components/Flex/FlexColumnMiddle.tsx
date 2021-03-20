import styled, { css } from 'styled-components';
import { flexColumn } from './FlexColumn';

export const flexColumnMiddle = css`
  ${flexColumn};
  align-items: center;
`;

export const FlexColumnMiddle = styled.div`
  ${flexColumnMiddle};
`;
