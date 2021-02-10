// import { darken } from 'polished';

const colors = {
  primary: '#ff6e40',
  secondary: '#ffc13b',
  white: '#ffffff',
  black: '#000000',
  gray: '#f5f0e1',
  yellow: '#ff6e40',
  background: '#f5f0e1',
  link: '#1e3d59',
  pageHeader: '#ffc13b',
  sapphireLight: '#112E78',
  sapphireLightMedium: '#0C2D80',
  sapphireMedium: '#021B5B',
  sapphireDark: '#0B225C',
  frenchPass: '#96D5E4',
  darkMagenta: '#7D0396',
  purple: '#6C0382',
  modalBackground: '#afd9e3',
};

const theme = {
  colors,
  button: {
    primary: {
      normal: {
        background: colors.darkMagenta,
        color: colors.white,
        border: colors.white,
      },
      hover: {
        background: colors.darkMagenta,
        color: colors.white,
        border: colors.white,
        fontWeight: '700',
      },
      active: {
        background: colors.purple,
        color: colors.white,
        border: colors.white,
      },
    },
    secondary: {
      normal: {
        background: 'transparent',
        color: colors.darkMagenta,
        border: colors.darkMagenta,
      },
      hover: {
        background: colors.white,
        color: colors.darkMagenta,
        border: colors.darkMagenta,
      },
      active: {
        background: colors.purple,
        color: colors.white,
        border: colors.white,
      },
    },
  },
  link: {
    primary: {
      normal: {
        background: 'transparent',
        color: colors.white,
        border: colors.white,
      },
      hover: {
        background: colors.sapphireDark,
        color: colors.white,
        border: 'transparent',
      },
      active: {
        background: colors.frenchPass,
        color: colors.black,
        border: colors.white,
      },
    },
    secondary: {
      normal: {
        background: 'transparent',
        color: colors.white,
        border: 'none',
      },
      hover: {
        fontWeight: '700',
      },
      active: {
        border: colors.white,
        background: colors.darkMagenta,
      },
    },
    nihul: {
      normal: {
        color: colors.sapphireLightMedium,
      },
      hover: {
        color: colors.sapphireLightMedium,
      },
      active: {
        color: colors.sapphireMedium,
      },
    },
  },
  page: {
    background: colors.sapphireDark,
    header: {
      color: colors.frenchPass,
    },
    nihul: {
      header: {
        color: colors.sapphireMedium,
      },
      background: colors.frenchPass,
      border: colors.white,
    },
  },
  topbar: {
    background: `linear-gradient(${colors.sapphireLight}, ${colors.sapphireDark})`,
    border: colors.white,
  },
  modal: {
    background: colors.modalBackground,
    border: colors.white,
    borderRadius: '20px',
  },
  text: {
    title: {
      fontSize: '25px',
      fontWeight: '700',
      lineHeight: '33px',
      color: colors.sapphireLightMedium,
    },
    paragraph: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '26px',
      color: colors.sapphireLightMedium,
    },
  },
  mapPinIcons: [
    {
      title: "בוצ'ה",
      position: {
        left: 17,
        top: 45,
        background: colors.sapphireLightMedium,
      },
    },
    {
      title: 'כדורסל',
      position: {
        left: 32,
        top: 19,
      },
    },
    {
      title: 'ריצה',
      position: {
        left: 44,
        top: 12,
      },
    },
    {
      title: 'טניס',
      position: {
        left: 62,
        top: 17,
      },
    },
    {
      title: 'שחיה',
      position: {
        left: 81,
        top: 30,
      },
    },
    {
      title: 'פינג פונג',
      position: {
        left: 61,
        top: 41,
      },
    },
    {
      title: 'כדורשת',
      position: {
        left: 43,
        top: 35,
      },
    },
    {
      title: 'אופניים זוגים',
      position: {
        left: 32,
        top: 52,
      },
    },
  ],
};

export default theme;
