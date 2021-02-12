import styled, { css } from 'styled-components';
import { flexColumnCenter } from './FlexColumnCenter';

export const flexColumnCenterBottom = css`
  ${flexColumnCenter};
  align-items: center;
  justify-content: flex-end;
`;

export const FlexColumnCenterBottom = styled.div`
  ${flexColumnCenterBottom};
`;
