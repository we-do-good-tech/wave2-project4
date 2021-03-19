import React, { ReactElement } from 'react';
import styled from 'styled-components';
import basketballIconSVG from '../assets/images/basketball.svg';
import basketballIconBgSVG from '../assets/images/basketball_bg.svg';
import bikeIconSVG from '../assets/images/bike.svg';
import bucheIconSVG from '../assets/images/buchia.svg';
import bucheIconBgSVG from '../assets/images/buchia_bg.svg';
import goalBallIconSVG from '../assets/images/goalball.svg';
import goalBallIconBgSVG from '../assets/images/goalball_bg.svg';
import pingpongIconSVG from '../assets/images/pingpong.svg';
import pingpongIconBgSVG from '../assets/images/pingpong_bg.svg';
import runningIconSVG from '../assets/images/running.svg';
import runningIconBgSVG from '../assets/images/running_bg.svg';
import swimmingIconSVG from '../assets/images/swimming.svg';
import swimmingIconBgSVG from '../assets/images/swimming_bg.svg';
import tennisIconSVG from '../assets/images/tennis.svg';
import tennisIconBgSVG from '../assets/images/tennis_bg.svg';

const BasketballIcon = styled.div`
  position: absolute;
  top: 24%;
  left: 25.2%;
  width: 17.3%;
  height: 30.9%;
  background-image: url(${basketballIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 0;
`;

const BasketballIconBg = styled(BasketballIcon)`
  background-image: url(${basketballIconBgSVG});
`;

const BikeIcon = styled.div`
  position: absolute;
  top: 12%;
  left: 0%;
  width: 100%;
  height: 84%;
  background-image: url(${bikeIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: -1;
`;

const BucheIcon = styled.div`
  position: absolute;
  top: 43.4%;
  left: 6.6%;
  width: 23.6%;
  height: 42.9%;
  background-image: url(${bucheIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
`;

const BucheIconBg = styled(BucheIcon)`
  background-image: url(${bucheIconBgSVG});
`;

const GoalBallIcon = styled.div`
  position: absolute;
  top: 43.6%;
  left: 34.4%;
  width: 22.3%;
  height: 25.9%;
  background-image: url(${goalBallIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
`;

const GoalBallIconBg = styled(GoalBallIcon)`
  background-image: url(${goalBallIconBgSVG});
`;

const PingpongIcon = styled.div`
  position: absolute;
  top: 46.2%;
  left: 56.3%;
  width: 22.4%;
  height: 36.5%;
  background-image: url(${pingpongIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
`;

const PingpongBgIcon = styled(PingpongIcon)`
  background-image: url(${pingpongIconBgSVG});
`;

const RunningIcon = styled.div`
  position: absolute;
  top: 14.8%;
  left: 37.9%;
  width: 19.4%;
  height: 21.4%;
  background-image: url(${runningIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 0;
`;

const RunningBgIcon = styled(RunningIcon)`
  background-image: url(${runningIconBgSVG});
`;

const SwimmingIcon = styled.div`
  position: absolute;
  top: 33.5%;
  left: 71.6%;
  width: 21.6%;
  height: 31.9%;
  background-image: url(${swimmingIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
`;

const SwimmingBgIcon = styled(SwimmingIcon)`
  background-image: url(${swimmingIconBgSVG});
`;

const TennisIcon = styled.div`
  position: absolute;
  top: 17%;
  left: 55.7%;
  width: 16.2%;
  height: 30.1%;
  background-image: url(${tennisIconSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
`;

const TennisBgIcon = styled(TennisIcon)`
  background-image: url(${tennisIconBgSVG});
`;

type AvailableGamesType = {
  [key: string]: boolean;
};

type MapPinIconType = {
  title: string;
  position: any;
  icon: ReactElement;
  iconBg?: ReactElement;
  left: number;
  availableGames: AvailableGamesType;
};

const mapPinIcons: MapPinIconType[] = [
  {
    title: 'בוצ׳ה',
    position: {
      left: 17,
      top: 45,
    },
    icon: <BucheIcon />,
    iconBg: <BucheIconBg />,
    left: 50,
    availableGames: {
      tomer: false,
      nir: true,
      shira: false,
    },
  },
  {
    title: 'טניס בכסאות גלגלים',
    position: {
      left: 62,
      top: 17,
    },
    icon: <TennisIcon />,
    iconBg: <TennisBgIcon />,
    left: 37,
    availableGames: {
      tomer: true,
      nir: true,
      shira: false,
    },
  },
  {
    title: 'כדורסל',
    position: {
      left: 32,
      top: 19,
    },
    icon: <BasketballIcon />,
    iconBg: <BasketballIconBg />,
    left: 64,
    availableGames: {
      tomer: true,
      nir: true,
      shira: false,
    },
  },
  {
    title: 'שחיה',
    position: {
      left: 81,
      top: 30,
    },
    icon: <SwimmingIcon />,
    iconBg: <SwimmingBgIcon />,
    left: 50,
    availableGames: {
      tomer: true,
      nir: true,
      shira: true,
    },
  },
  {
    title: 'אופניים זוגיים טנדם',
    position: {
      left: 32,
      top: 57,
    },
    icon: <BikeIcon />,
    left: 60,
    availableGames: {
      tomer: false,
      nir: false,
      shira: true,
    },
  },
  {
    title: 'טניס שולחן',
    position: {
      left: 61,
      top: 41,
    },
    icon: <PingpongIcon />,
    iconBg: <PingpongBgIcon />,
    left: 37,
    availableGames: {
      tomer: true,
      nir: true,
      shira: false,
    },
  },
  {
    title: 'ריצה',
    position: {
      left: 44,
      top: 8,
    },
    icon: <RunningIcon />,
    iconBg: <RunningBgIcon />,
    left: 76,
    availableGames: {
      tomer: true,
      nir: false,
      shira: true,
    },
  },
  {
    title: 'כדור שער',
    position: {
      left: 43,
      top: 35,
    },
    icon: <GoalBallIcon />,
    iconBg: <GoalBallIconBg />,
    left: 76,
    availableGames: {
      tomer: false,
      nir: false,
      shira: true,
    },
  },
];

export default mapPinIcons;
