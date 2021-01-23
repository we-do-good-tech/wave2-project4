import { darken } from 'polished';

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
};

const theme = {
    colors,
    button: {
        primary: {
            normal: {
                background: colors.primary,
                color: colors.secondary,
                border: 'transparent',
            },
            hover: {
                background: darken(0.1, colors.primary),
                color: colors.secondary,
                border: 'transparent',
            },
        },
    },
};

export default theme;
