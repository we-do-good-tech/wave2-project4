import React from 'react';
import styled from 'styled-components';
import basketballIconSVG from '../assets/images/basketball.svg';
import bikeIconSVG from '../assets/images/bike.svg';
import bucheIconSVG from '../assets/images/buchia.svg';
import goalBallIconSVG from '../assets/images/goalball.svg';
import pingpongIconSVG from '../assets/images/pingpong.svg';
import runningIconSVG from '../assets/images/running.svg';
import swimmingIconSVG from '../assets/images/swimming.svg';
import tennisIconSVG from '../assets/images/tennis.svg';

const BasketballIcon = styled.div`
  position: absolute;
  top: 24%;
  left: 25.2%;
  width: 17.3%;
  height: 30.9%;
  background-image: url(${basketballIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const BikeIcon = styled.div`
  position: absolute;
  top: 12%;
  left: 0%;
  width: 100%;
  height: 84%;
  background-image: url(${bikeIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
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
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const GoalBallIcon = styled.div`
  position: absolute;
  top: 43.6%;
  left: 34.4%;
  width: 22.3%;
  height: 25.9%;
  background-image: url(${goalBallIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const PingpongIcon = styled.div`
  position: absolute;
  top: 46.2%;
  left: 56.3%;
  width: 22.4%;
  height: 36.5%;
  background-image: url(${pingpongIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const RunningIcon = styled.div`
  position: absolute;
  top: 14.8%;
  left: 37.9%;
  width: 19.4%;
  height: 21.4%;
  background-image: url(${runningIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const SwimmingIcon = styled.div`
  position: absolute;
  top: 33.5%;
  left: 71.6%;
  width: 21.6%;
  height: 31.9%;
  background-image: url(${swimmingIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const TennisIcon = styled.div`
  position: absolute;
  top: 17%;
  left: 55.7%;
  width: 16.2%;
  height: 30.1%;
  background-image: url(${tennisIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

type AvailableGamesType = {
  [key: string]: boolean;
};

type MapPinIconType = {
  title: string;
  position: any;
  icon: any;
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
    left: 76,
    availableGames: {
      tomer: false,
      nir: false,
      shira: true,
    },
  },
];

export default mapPinIcons;
