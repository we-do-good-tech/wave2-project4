import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexCenterMiddle, FlexColumnCenter } from 'shared/components';
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

type AvailableActionsType = Array<{
  able: string;
  action: string;
  id: number;
  position: string;
  info: string;
  video?: string;
}>;

type PlayerImagesType = {
  [key: string]: string;
};

type Player = {
  name: string;
  text: string;
  path: string;
  images: PlayerImagesType;
  bgColor: string;
  btnColor: string;
  actions: AvailableActionsType;
};

const players: Player[] = [
  {
    name: 'תומר',
    text:
      "אני בן 10 בכיתה ה'. אני אוהב פיצה, כדורגל ולרוץ עם חברים. לפני שנתיים, רכבתי באופניים בנתיב לא מתאים ורכב פגע לי ברגל. הרופאים קטעו לי את רגל שמאל מעל הברך וגיליתי, לשמחתי, שעם פרוטזה (האביזר שמחובר לרגלי השמאלית) אני יכול לעשות כמעט הכל.",
    path: 'tomer',
    images: {
      hello: Tomer,
      availble: TomerAvailable,
      win: TomerAvailableWin,
      fail: TomerFail,
      success: TomerSuccess,
    },
    bgColor: theme.colors.tomerBgGreen,
    btnColor: theme.colors.tomerActionYellow,
    actions: [
      { able: 'CAN', action: 'לשחק כדורגל בהפסקה', id: 4, position: 'INIT', info: '' },
      {
        able: 'CANT',
        action: 'להשתתף בקפיצה לרוחק במשחקים האולימפיים',
        id: 1,
        position: 'INIT',
        info: 'עם פרוטזה משתתפים <strong>רק</strong> במשחקים פראלימפיים',
      },
      { able: 'CAN', action: 'להתאמן בחדר כושר', id: 5, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לקפוץ לגובה גם בלי פרוטזה',
        id: 6,
        position: 'INIT',
        info: 'צפו בסרטון:',
        video: 'https://www.youtube.com/v/7OK8WbFRSxI&t=6s?start=0&end=15',
      },
      { able: 'CAN', action: 'להיות שופט במשחק כדורסל', id: 7, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לשחות עם הפרוטזה בים', id: 8, position: 'INIT', info: 'יש פרוטזה מיוחדת לשחיה' },
      { able: 'CAN', action: 'לקלוע עם חץ וקשת ישר למטרה', id: 9, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לבחור מה תהייה התוצאה בסוף ', id: 2, position: 'INIT', info: 'את זה אף אחד לא יכול' },
      { able: 'CAN', action: 'לרכב על סוסים', id: 10, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנעול נעלי ספורט', id: 11, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לרוץ מאה מטר בפחות מ 9 שניות ', id: 3, position: 'INIT', info: 'את זה אף אחד לא יכול' },
      { able: 'CAN', action: 'לשחק תופסת בהפסקה', id: 12, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון', id: 13, position: 'INIT', info: '' },
    ],
  },
  {
    name: 'ניר',
    text:
      "אני בן 9, לומד בכיתה ד'. אני אוהב ממתקים, לצאת לטייל עם הכלב שלי ולשחק כדורסל עם חברים. כשהייתי בבטן של אימי, הגוף שלי לא התפתח כמו שצריך, חמצן לא הגיע לאזור שפוקד על הרגליים לזוז (זה נקרא שיתוק מוחין), ולכן קשה לי ללכת. אני מתנייד עם כיסא גלגלים. הכיסא מאפשר לי להתחרות עם חברים ולהגיע במהירות ממקום למקום.",
    path: 'nir',
    images: {
      hello: Nir,
      availble: NirAvailable,
      win: NirAvailableWin,
      fail: NirFail,
      success: NirSuccess,
    },
    bgColor: theme.colors.modalBackground,
    btnColor: theme.colors.nirActionPurple,
    actions: [
      { able: 'CAN', action: 'לשחק מסירות עם כדור בהפסקה', id: 4, position: 'INIT', info: '' },
      { able: 'CAN', action: 'להתאמן בחדר כושר', id: 5, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לרקוד',
        id: 6,
        position: 'INIT',
        info: 'יש ענף ספורט לריקודים בכסאות גלגלים',
        video: 'https://youtu.be/WlmbOKLdY_o?start=15',
      },
      { able: 'CAN', action: 'לשחק טניס', id: 7, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לשחק תופסת גובה', id: 3, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנצח בתחרות שחיה ', id: 8, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לשחק בקבוצת כדורסל',
        id: 9,
        position: 'INIT',
        info: 'יש קבוצות כדורסל שכולם בכיסאות גלגלים',
      },
      { able: 'CANT', action: 'לקפוץ לרוחק', id: 1, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לחתור בסירה', id: 10, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לקחת איתי את ציוד הספורט', id: 11, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לנסוע באוטובוס לאימון',
        id: 12,
        position: 'INIT',
        info: 'ברוב האוטובוסים יש רמפה לכסא גלגלים',
      },
      { able: 'CANT', action: 'להגיע למגרש לא מונגש', id: 2, position: 'INIT', info: '' },
    ],
  },
  {
    name: 'שירה',
    text:
      "אני בת 11, לומדת בכיתה ו'. אני ממש אוהבת להיפגש עם חברות ולעשות סרטונים בטיקטוק. יש לי בעית ראייה שעוברת במשפחה (יש אותה גם לאבא שלי) בה אני רואה דברים במטושטש. לכן אני נעזרת במקל הליכה, בחברות שלי ובחוש השמיעה המפותח שלי.",
    path: 'shira',
    images: {
      hello: Shira,
      availble: ShiraAvailable,
      win: ShiraAvailableWin,
      fail: ShiraFail,
      success: ShiraSuccess,
    },
    bgColor: theme.colors.shiraBgPurple,
    btnColor: theme.colors.shiraActionPuprle,
    actions: [
      { able: 'CAN', action: 'לשחק בהפסקה משחקים ספורטיביים', id: 1, position: 'INIT', info: '' },
      { able: 'CAN', action: 'להתאמן בחדר כושר', id: 2, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לשחק כדורשת',
        id: 3,
        position: 'INIT',
        info: 'יש כדור מיוחד שמשמיע צליל',
        video: 'https://www.youtube.com/v/WJifbI_OSps?start=240&end=255',
      },
      { able: 'CANT', action: 'לראות את דגל ישראל על מדי הנבחרת', id: 4, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לגלוש סקי', id: 5, position: 'INIT', info: 'גולש מאחורי מתאר לי את המסלול בזמן אמת' },
      { able: 'CAN', action: 'לשחק באולינג', id: 6, position: 'INIT', info: 'יש עוזר ומעקה לכיוון המסלול' },
      { able: 'CAN', action: "לנצח יריב בג'ודו", id: 7, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לשפוט במשחק כדורגל', id: 8, position: 'INIT', info: '' },
      {
        able: 'CAN',
        action: 'לשמוע באיזו מדליה זכיתי',
        id: 9,
        position: 'INIT',
        info: 'למדליות במשחקים הפארלימפיים יש צלילים',
      },
      { able: 'CAN', action: 'לרכב על אופניים', id: 9, position: 'INIT', info: 'רוכב איתי עוד מישהו שרואה' },
      {
        able: 'CANT',
        action: 'לראות את המדליה כשזוכים',
        id: 10,
        position: 'INIT',
        info: 'אני יכולה לקרוא מה כתוב עליה בכתב ברייל',
      },
      { able: 'CAN', action: 'לשחק פרה עיוורת', id: 11, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון', id: 12, position: 'INIT', info: '' },
    ],
  },
];

export const Instruction = styled.div`
  ${flexCenterMiddle};
  position: absolute;
  background: ${({ theme }) => theme.colors.darkMagenta};
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 39px;
  min-width: 50%;
  height: 11%;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  color: #ffffff;
  justify-self: center;
  top: 3%;
  padding: 0 20px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    font-size: 24px;
  }
`;

export const Item = styled(motion.div)`
  ${flexCenterMiddle};
  background: linear-gradient(180deg, #052a86 0%, #04206b 100%);
  border-radius: 50%;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-right: 5px;
  white-space: break-spaces;
`;

export const GamesModal = styled(FlexColumnCenter)`
  position: relative;
  width: 80%;
  height: 92%;
  margin: 20px auto;
  align-items: center;
  background: ${({ theme }) => theme.modal.background};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 100;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    width: 80vw;
    margin: 10px auto;
    height: 75vh;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    width: 80vh;
    margin: 10px auto;
    height: 85vw;
  }
`;

export const VideoContainer = styled(FlexColumnCenter)`
  width: 45%;
  margin-top: 10px;

  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    width: 40%;
    height: 46%;
    margin-top: 5px;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    width: 81%;
    height: 54%;
    margin-top: 5px;
  }
`;

export default players;
