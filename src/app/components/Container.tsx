import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from 'shared/components/Flex';
import TopBar from 'app/components/TopBar';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 69px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100vw;
  // min-width: 1280px;
  overflow: hidden;
  // @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
  //   grid-template-rows: 33px 1fr;
  //   width: 100vw !important;
  //   height: 100vh !important;
  //   min-width: 100vw !important;
  //   min-height: auto !important;
  //   max-width: 100vw !important;
  //   max-height: auto !important;
  // }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    grid-template-rows: 33px 1fr;
    height: 100vh;
    width: 100vw;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    grid-template-rows: 33px 1fr;
    height: 100vw;
    width: 100vh;
    transform: rotate(90deg) translateY(-100%);
    transform-origin: top left;
  }
`;

const Content = styled(FlexColumn)`
  background: ${({ theme }) => theme.page.background};
  position: relative;
  overflow: auto;
`;

type Props = { children?: React.ReactNode };

const Container = ({ children }: Props) => (
  <Wrapper>
    <TopBar />
    <Content>{children}</Content>
  </Wrapper>
);

export default Container;
