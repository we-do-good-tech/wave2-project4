import React from 'react';
import styled from 'styled-components';
import basketballIconSVG from '../assets/images/basketball.svg';
import bikeIconSVG from '../assets/images/bike.svg';
import bucheIconSVG from '../assets/images/buche.svg';
import goalBallIconSVG from '../assets/images/goalball.svg';
import pingpongIconSVG from '../assets/images/pingpong.svg';
import runningIconSVG from '../assets/images/running.svg';
import swimmingIconSVG from '../assets/images/swimming.svg';
import tennisIconSVG from '../assets/images/tennis.svg';

const BasketballIcon = styled.div`
  position: absolute;
  top: 23.5%;
  left: 25.1%;
  width: 17.3%;
  height: 30.5%;
  background-image: url(${basketballIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
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
  top: 43.3%;
  left: 5.9%;
  width: 23.8%;
  height: 43.3%;
  background-image: url(${bucheIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const GoalBallIcon = styled.div`
  position: absolute;
  top: 42.9%;
  left: 35%;
  width: 21%;
  height: 26%;
  background-image: url(${goalBallIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const PingpongIcon = styled.div`
  position: absolute;
  top: 47.8%;
  left: 54.9%;
  width: 22.8%;
  height: 35%;
  background-image: url(${pingpongIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const RunningIcon = styled.div`
  position: absolute;
  top: 13.7%;
  left: 37.7%;
  width: 19.7%;
  height: 21.7%;
  background-image: url(${runningIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const SwimmingIcon = styled.div`
  position: absolute;
  top: 33.1%;
  left: 71.7%;
  width: 21.7%;
  height: 31.3%;
  background-image: url(${swimmingIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const TennisIcon = styled.div`
  position: absolute;
  top: 16.2%;
  left: 55.5%;
  width: 16.6%;
  height: 30.1%;
  background-image: url(${tennisIconSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const mapPinIcons = [
  {
    title: 'בוצ׳ה',
    position: {
      left: 17,
      top: 45,
    },
    icon: <BucheIcon />,
    left: 50,
  },
  {
    title: 'טניס בכסאות גלגלים',
    position: {
      left: 62,
      top: 17,
    },
    icon: <TennisIcon />,
    left: 37,
  },
  {
    title: 'כדורסל',
    position: {
      left: 32,
      top: 19,
    },
    icon: <BasketballIcon />,
    left: 64,
  },
  {
    title: 'שחיה',
    position: {
      left: 81,
      top: 30,
    },
    icon: <SwimmingIcon />,
    left: 50,
  },
  {
    title: 'אופניים זוגיים טנדם',
    position: {
      left: 32,
      top: 52,
    },
    icon: <BikeIcon />,
    left: 60,
  },
  {
    title: 'טניס שולחן',
    position: {
      left: 61,
      top: 41,
    },
    icon: <PingpongIcon />,
    left: 37,
  },
  {
    title: 'ריצה',
    position: {
      left: 44,
      top: 8,
    },
    icon: <RunningIcon />,
    left: 76,
  },
  {
    title: 'כדור שער',
    position: {
      left: 43,
      top: 35,
    },
    icon: <GoalBallIcon />,
    left: 76,
  },
];

export default mapPinIcons;
