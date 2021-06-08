// eslint-disable-next-line
import { PaletteType } from '@material-ui/core';

export const light = {
  alternate: {
    main: '#B4FEE7',
    dark: '#b4fee7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  type: 'light' as PaletteType,
  primary: {
    main: '#FD49A0',
    light: '#feb3d8',
    dark: '#b10256',
    contrastText: '#fff',
  },
  secondary: {
    light: '#d5bdf5',
    main: '#A16AE8',
    dark: '#8238e0',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#2d3748',
    secondary: '#718096',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#fff',
    level2: '#f5f5f5',
    level1: '#fff',
    footer: '#1b1642',
  },
};

export const dark = {
  alternate: {
    main: '#2D3748',
    dark: '#24242b',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  type: 'dark' as PaletteType,
  primary: {
    main: '#90caf9',
    light: 'rgb(166, 212, 250)',
    dark: 'rgb(100, 141, 174)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#1A202C',
    default: '#121212',
    level2: '#333',
    level1: '#2D3748',
    footer: '#18181f',
  },
};
