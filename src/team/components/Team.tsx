import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  padding: 35px;
`;

const Header = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.pageHeader};
`;

const Information = () => (
  <Wrapper>
    <Header>Team Page</Header>
  </Wrapper>
);

export default Information;
