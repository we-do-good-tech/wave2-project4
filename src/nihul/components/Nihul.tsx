import React from 'react';
import styled from 'styled-components';
import Games from './Games';
import TopBar from './TopBar';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  dispaly: flex;
  flex-direction: column;
  flex: 1;
  margin: 22px 32px;
  background: ${({ theme }) => theme.page.nihul.background};
  border: 4px solid ${({ theme }) => theme.page.nihul.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 32.7px;
  color: ${({ theme }) => theme.page.nihul.header.color};
  margin-top: 77px;
  margin-bottom: 32px;
`;

const Nihul = () => (
  <Wrapper>
    <Header>ניהול</Header>
    <TopBar />
    <Games />
  </Wrapper>
);

export default Nihul;
