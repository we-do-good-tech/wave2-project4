import React from 'react';
import styled from 'styled-components';
import mapBg from '../../assets/images/map_bg.svg';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Map = styled.div`
  height: 100%;
  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Homepage = () => (
  <Wrapper>
    <Map />
  </Wrapper>
);

export default Homepage;
