import React from 'react';
import styled from 'styled-components';
import { BackgroundWrapper, FlexColumn } from 'shared/components';
import logo from 'assets/images/logo-information.png';

const P = styled.p`
  width: 98%;
  font-weight: ${({ theme }) => theme.text.paragraph.fontWeight};
  font-size: ${({ theme }) => theme.text.paragraph.fontSize};
  line-height: ${({ theme }) => theme.text.paragraph.lineHeight};
  text-align: right;
  color: ${({ theme }) => theme.text.paragraph.color};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 99%;
    font-size: 14px;
    line-height: 15px;
  }
`;

const H5 = styled.h5`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
  color: ${({ theme }) => theme.text.paragraph.color};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 14px;
    line-height: 15px;
  }
`;

const MainWrapper = styled.div`
  height: 80%;
  flex: 1 1 80%;
`;

const Main = styled.main.attrs({ dir: 'rtl' })`
  padding: 20px 50px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    padding: 10px 25px;
  }
`;

const WhiteWapper = styled(FlexColumn)`
  background: ${({ theme }) => theme.information.whitePaperBackground};
  box-shadow: 0px 0px 20px rgba(2, 27, 91, 0.25);
  width: 50%;
  margin: 0 auto;
  height: 100%;
  flex: 0 0 50%;
  text-align: center;
  direction: ltr;
`;

const StyledSection = styled.div`
  margin-top: 1.5rem;
`;

const StyledImg = styled.img`
  width: 100%;
  margin-top: 1.5rem;
`;

const Team = () => (
  <BackgroundWrapper>
    <WhiteWapper>
      <MainWrapper>
        <Main>
          <StyledSection>
            <H5>ההתאחדות הישראלית לספורט נכים</H5>
            <P>ההתאחדות הישראלית לספורט נכים מנהלת את כלל הפעילות התחרותית וההישגית בענפים הפראלימפיים בישראל.</P>
          </StyledSection>
          <StyledSection>
            <H5>הוועד הפראלימפי הישראלי</H5>
            <P>הוועד הפראלימפי הישראלי אחראי להכנתן ושיגורן של משלחות ישראל למשחקים הפראלימפים.</P>
          </StyledSection>
          <StyledSection>
            <H5 dir="ltr">2020 WeDoGood.Tech מיזם</H5>
            <P>
              מיזם WeDoGood.Tech מרכיב צוותי מוצר לאפיון, עיצוב ופיתוח פתרונות טכנולוגיים לעמותות במחזורי פיתוח קצרים.
              <br />
              בכל מחזור משתתפות עמותות בעלות צורך טכנולוגי ומתנדבים מתחומי העיצוב והפיתוח המרכיבים את צוותי המוצר.
            </P>
          </StyledSection>
          <StyledImg src={logo} />
        </Main>
      </MainWrapper>
    </WhiteWapper>
  </BackgroundWrapper>
);

export default Team;
