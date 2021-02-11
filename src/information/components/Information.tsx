import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo-information.png';
import { Background } from '../../shared/components/index';

const P = styled.p`
  font-family: Assistant;
  width: 80%;
  font-style: normal;
  font-weight: ${({ theme }) => theme.text.paragraph.fontWeight};
  font-size: ${({ theme }) => theme.text.paragraph.fontSize};
  line-height: ${({ theme }) => theme.text.paragraph.lineHeight};
  text-align: right;
  color: ${({ theme }) => theme.text.paragraph.color};
`;

const H5 = styled.h5`
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
  color: ${({ theme }) => theme.text.paragraph.color};
`;

const MainWrapper = styled.div`
  height: 80%;
  flex: 1 1 80%;
`;

const Main = styled.main`
  padding: 20px 50px;
  direction: rtl;
`;

const WhiteWapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(2, 27, 91, 0.25);
  width: 50%;
  margin: 0 auto;
  height: 100%;
  flex: 0 0 50%;
  text-align: center;
  direction: ltr;
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.div`
  margin-top: 1.5rem;
`;

const StyledImg = styled.img`
  margin-top: 1.5rem;
`;

const Team = () => {
  const { Wrapper } = Background;

  return (
    <Wrapper>
      <WhiteWapper>
        <MainWrapper>
          <Main>
            <StyledSection>
              <H5>ההתאחדות הישראלית לספורט נכים</H5>
              <P>
                אמונה על ניהולם של עשרים ענפי ספורט פראלימפים ומנהלת בהם את כל פעילות הספורט התחרותית וההישגית של ספורט
                הנכים בישראל.
              </P>
            </StyledSection>
            <StyledSection>
              <H5>הוועד הפראלימפי הישראלי</H5>
              <P>
                אחראי להכנתן ושיגורן של משלחות ישראל למשחקים הפראלימפים. הוועד הפראלימפי תומך בספורטאי הסגלים ונתמך
                במישור המקצועי על ידי היחידה לספורט הישגי. הוועד הפראלימפי מפעיל את הקרן לקידום ספורט הנכים, מעניק מלגות
                הישג לספורטאי הסגל הבכיר בהתאם לקריטריוני הישג מזכים, ו
              </P>
            </StyledSection>
            <StyledSection>
              <H5>2020. מיזם WeDoGood.Tech</H5>
              <P>
                מלווה בתמיכה מקצועית ספורטאי עתודה מצטיינים וסגל מרכיב צוותי מוצר לאפיון, עיצוב ופיתוח פתרונות
                טכנולוגיים לעמותות במחזורי פיתוח קצרים. בכל מחזור משתתפות עמותות בעלות צורך טכנולוגי ומתנדבים מתחומי
                העיצוב והפיתוח המרכיבים את צוותי המוצר.
              </P>
            </StyledSection>
            <StyledImg src={logo} />
          </Main>
        </MainWrapper>
      </WhiteWapper>
    </Wrapper>
  );
};

export default Team;
