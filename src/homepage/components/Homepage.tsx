import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  padding: 33px 35px 0px 35px;
`;

const Header = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.pageHeader};
`;

const Homepage = () => (
  <Wrapper>
    <Header>Home Page</Header>
  </Wrapper>
);

export default Homepage;
