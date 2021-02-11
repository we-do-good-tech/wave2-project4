import styled from 'styled-components';
import bg from '../../../assets/images/teamBg.svg';

export const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  flex: 1;
  background: url(${bg}), linear-gradient(0deg, #6acfff 0%, #0071bc 100%);
`;

export const WhiteWapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(2, 27, 91, 0.25);
  width: 84%;
  margin: 0 auto;
  height: 100%;
  flex: 0 0 84%;
  text-align: center;
  direction: ltr;
  display: flex;
  flex-direction: column;
`;
