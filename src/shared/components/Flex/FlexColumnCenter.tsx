import styled, { css } from 'styled-components';
import { flexColumn } from './FlexColumn';

export const flexColumnCenter = css`
  ${flexColumn};
  justify-content: center;
`;

export const FlexColumnCenter = styled.div`
  ${flexColumnCenter};
`;
