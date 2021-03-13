import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from 'shared/style/theme';
import Nir from 'assets/images/Nir.svg';
import NirAvailable from 'assets/images/NirAvailable.svg';
import NirAvailableWin from 'assets/images/NirAvailableWin.svg';
import NirFail from 'assets/images/NirFail.svg';
import NirSuccess from 'assets/images/NirSuccess.svg';
import Shira from 'assets/images/Shira.svg';
import ShiraAvailable from 'assets/images/ShiraAvailable.svg';
import ShiraAvailableWin from 'assets/images/ShiraAvailableWin.svg';
import ShiraFail from 'assets/images/ShiraFail.svg';
import ShiraSuccess from 'assets/images/ShiraSuccess.svg';
import Tomer from 'assets/images/Tomer.svg';
import TomerAvailable from 'assets/images/TomerAvailable.svg';
import TomerAvailableWin from 'assets/images/TomerAvailableWin.svg';
import TomerFail from 'assets/images/TomerFail.svg';
import TomerSuccess from 'assets/images/TomerSuccess.svg';
import Check from 'assets/images/V.svg';
import Wrong from 'assets/images/X.svg';

type AvailableActionsType = Array<{
  able: string;
  action: string;
  id: number;
  position: string;
  info: string;
}>;

type PlayerImagesType = {
  [key: string]: string[];
};

type Player = {
  name: string;
  path: string;
  images: PlayerImagesType;
  bgColor: string;
  btnColor: string;
  actions: AvailableActionsType;
};

const players: Player[] = [
  {
    name: 'תומר',
    path: 'tomer',
    images: {
      hello: [Tomer],
      availble: [TomerAvailable],
      win: [TomerAvailableWin],
      fail: [TomerFail, Wrong],
      success: [TomerSuccess, Check],
    },
    bgColor: theme.colors.tomerBgGreen,
    btnColor: theme.colors.tomerActionYellow,
    actions: [
      { able: 'CANT', action: 'להשתתף בקפיצה לרוחק במשחקים האולימפיים', id: 1, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לבחור מה תהייה התוצאה בסוף ', id: 2, position: 'INIT', info: 'את זה אף אחד לא יכול' },
      { able: 'CANT', action: 'לרוץ מאה מטר בפחות מ 9 שניות ', id: 3, position: 'INIT', info: 'את זה אף אחד לא יכול' },
      { able: 'CAN', action: 'לשחק כדורגל בהפסקה', id: 4, position: 'INIT', info: '' },
      { able: 'CAN', action: 'להתאמן בחדר כושר', id: 5, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לקפוץ לגובה גם בלי פרוטזה', id: 6, position: 'INIT', info: '' },
      { able: 'CAN', action: 'להיות שופט במשחק כדורסל', id: 7, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לשחות עם הפרוטזה בים', id: 8, position: 'INIT', info: 'יש פרוטזה מיוחדת לשחיה' },
      { able: 'CAN', action: 'לקלוע עם חץ וקשת ישר למטרה', id: 9, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לרכב על סוסים', id: 10, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנעול נעלי ספורט', id: 11, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לשחק תופסת בהפסקה', id: 12, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון', id: 13, position: 'INIT', info: '' },
    ],
  },
  {
    name: 'ניר',
    path: 'nir',
    images: {
      hello: [Nir],
      availble: [NirAvailable],
      win: [NirAvailableWin],
      fail: [NirFail, Wrong],
      success: [NirSuccess, Check],
    },
    bgColor: theme.colors.modalBackground,
    btnColor: theme.colors.nirActionPurple,
    actions: [
      { able: 'CANT', action: 'לקפוץ לרוחק', id: 1, position: 'INIT', info: 'בדיקה' },
      { able: 'CANT', action: 'להגיע למגרש לא מונגש', id: 2, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לשחק תופסת גובה', id: 3, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לשחק מסירות עם כדור בהפסקה', id: 4, position: 'INIT', info: '' },
      { able: 'CAN', action: 'להתאמן בחדר כושר', id: 5, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לרקוד', id: 6, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לשחק טניס', id: 7, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנצח בתחרות שחיה ', id: 8, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לשחק בקבוצת כדורסל',
        id: 9,
        position: 'INIT',
        info: 'יש קבוצות כדורסל שכולם בכיסאות גלגלים',
      },
      { able: 'CAN', action: 'לחתור בסירה', id: 10, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לקחת איתי את הציוד ספורט', id: 11, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לנסוע באוטובוס לאימון',
        id: 12,
        position: 'INIT',
        info: 'ברוב האוטובוסים יש רמפה לכסא גלגלים',
      },
    ],
  },
  {
    name: 'שירה',
    path: 'shira',
    images: {
      hello: [Shira],
      availble: [ShiraAvailable],
      win: [ShiraAvailableWin],
      fail: [ShiraFail, Wrong],
      success: [ShiraSuccess, Check],
    },
    bgColor: theme.colors.shiraBgPurple,
    btnColor: theme.colors.shiraActionPuprle,
    actions: [
      { able: 'CANT', action: 'לראות את דגל ישראל על מדי הנבחרת', id: 1, position: 'INIT', info: '' },
      {
        able: 'CANT',
        action: 'לראות את המדליה כשזוכים',
        id: 2,
        position: 'INIT',
        info: 'אני יכולה לקרוא מה כתוב עליה בכתב ברייל',
      },
      { able: 'CAN', action: 'לשחק עם חברים בהפסקה משחקים ספורטיביים', id: 3, position: 'INIT', info: '' },
      { able: 'CAN', action: 'להתאמן בחדר כושר', id: 4, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לשחק כדורגל', id: 5, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לגלוש סקי', id: 6, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לשחק באולינג', id: 7, position: 'INIT', info: 'יש עוזר ומעקה לכיוון המסלול' },
      { able: 'CAN', action: "לנצח יריב בג'ודו", id: 8, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לשמוע באיזו מדליה זכיתי',
        id: 9,
        position: 'INIT',
        info: 'למדליות במשחקים הפארלימפיים יש צלילים',
      },
      { able: 'CAN', action: 'לרכב על אופניים', id: 10, position: 'INIT', info: 'רוכב איתי עוד מישהו שרואה' },
      { able: 'CAN', action: 'לשחק פרה עיוורת', id: 11, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון', id: 12, position: 'INIT', info: '' },
    ],
  },
];

export const Instruction = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.darkMagenta};
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 39px;
  min-width: 616px;
  height: 71px;
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  justify-self: center;
  top: 3%;
  padding: 0 20px;
`;

export const Item = styled(motion.div)`
  background: linear-gradient(180deg, #052a86 0%, #04206b 100%);
  border-radius: 50%;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
  white-space: break-spaces;
`;

export default players;
