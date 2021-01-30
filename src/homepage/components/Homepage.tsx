import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  flex: 1;
  padding: 35px;
`;

const Header = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.page.header.color};
`;

const Homepage = () => (
  <Wrapper>
    <Header>משחקים פאראלימפיים</Header>
  </Wrapper>
);

export default Homepage;
