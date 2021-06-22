import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#053263'
      // main: '#5664d2'
    },
    warning: {
      contrastText: '#ffffff',
      main: '#5260ff'
    },
    success: {
      contrastText: '#ffffff',
      main: '#2dd36f'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  },
  shadows,
  typography
});

export default theme;
