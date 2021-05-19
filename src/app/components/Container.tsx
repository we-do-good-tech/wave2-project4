import React from 'react';
import styled, { css } from 'styled-components';
import { isMobile } from 'react-device-detect';
import { FlexColumn } from 'shared/components/Flex';
import TopBar from 'app/components/TopBar';

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-rows: 69px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    grid-template-rows: 33px 1fr;
    height: calc(100vh);
    width: 100vw;
  }
  ${({ isMobile }) =>
    isMobile &&
    css`
       {
        @media (orientation: portrait) {
          grid-template-rows: 33px 1fr;
          height: 100vw;
          width: calc(100vh - 30px);
          transform: rotate(90deg) translateY(-100%);
          transform-origin: top left;
        }
      }
    `};
`;

const Content = styled(FlexColumn)`
  background: ${({ theme }) => theme.page.background};
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

type Props = { children?: React.ReactNode };

const Container = ({ children }: Props) => (
  <Wrapper isMobile={isMobile}>
    <TopBar />
    <Content>{children}</Content>
  </Wrapper>
);

export default Container;
