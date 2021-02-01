import React from 'react';
import styled from 'styled-components';
import { Button } from 'shared/components';
import { FlexColumn } from 'shared/components/Flex/FlexColumn';
import mapBg from '../../assets/images/map_bg.svg';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const GamesModal = styled(FlexColumn)`
  position: relative;
  align-items: center;
  width: 60%;
  height: 80%;
  margin: 50px auto;
  background: ${({ theme }) => theme.modal.background};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 60%;
  margin-top: 90px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.text.title.fontSize};
  font-weight: ${({ theme }) => theme.text.title.fontWeight};
  color: ${({ theme }) => theme.text.title.color};
  line-height: ${({ theme }) => theme.text.title.lineHeight};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.text.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.text.paragraph.fontWeight};
  color: ${({ theme }) => theme.text.paragraph.color};
  line-height: ${({ theme }) => theme.text.paragraph.lineHeight};
  text-align: center;
`;

const ContinueBtn = styled(Button)`
  position: absolute;
  width: 160px;
  height: 50px;
  bottom: 25px;
  color: ${({ theme }) => theme.button.primary.normal.color};
  background: ${({ theme }) => theme.button.primary.normal.background};
  border: ${({ theme }) => theme.button.primary.normal.border};
  border-radius: 50px;

  &:hover {
    font-weight: ${({ theme }) => theme.button.primary.hover.fontWeight};
  }

  &:active {
    background: ${({ theme }) => theme.button.primary.active.background};
  }
`;

const Homepage = () => (
  <Wrapper>
    <GamesModal>
      <Container>
        <Title>מהם משחקים פראלימפיים</Title>
        <Content>
          משמעות המילה פראלימפי היא מקביל, כלומר המשחקים הפראלימפיים הם משחקים המקבילים למשחקים האולימפיים
        </Content>
      </Container>
      <ContinueBtn>המשך</ContinueBtn>
    </GamesModal>
  </Wrapper>
);

export default Homepage;
