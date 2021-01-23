import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from 'shared/components/Flex';
import TopBar from 'app/components/TopBar';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100vw;
  min-width: 1280px;
  overflow: hidden;
`;

const Content = styled(FlexColumn)`
  background: ${({ theme }) => theme.colors.white};
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
