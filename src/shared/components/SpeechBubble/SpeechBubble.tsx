import styled from 'styled-components';
import speechBubble from 'assets/images/speechBubble.svg';
import speechBubble_border from 'assets/images/speechBubble_border.svg';

export const SpeechBubbleWrapper = styled.div`
  background: url(${speechBubble}) no-repeat;
  background-size: contain;
  position: absolute;
  height: 50%;
  width: 50%;
  bottom: 40%;
  left: 20%;
  padding: 70px 0;
  font-family: Assistant;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  color: #092468;
`;
export const SpeechBubbleBorder = styled.div`
  background: url(${speechBubble_border}) no-repeat;
  background-size: contain;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 1%;
  top: 1%;
`;
