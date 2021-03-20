import styled from 'styled-components';
import bg from 'assets/images/teamBg.svg';
import { FlexColumn } from '../Flex';

export const BackgroundWrapper = styled.div.attrs({ dir: 'rtl' })`
  flex: 1;
  background: url(${bg}), linear-gradient(0deg, #6acfff 0%, #0071bc 100%);
`;

export const BackgroundWhiteWrapper = styled(FlexColumn)`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(2, 27, 91, 0.25);
  width: 84%;
  margin: 0 auto;
  height: 100%;
  flex: 0 0 84%;
  text-align: center;
  direction: ltr;
`;
