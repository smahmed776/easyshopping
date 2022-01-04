import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#e1f7f9",
      main: '#00a6ed',
      dark: '#0082ba',
    },
    secondary: {
      light:"rgba(0,0,0,0.08)",
      main: '#19857b',
      dark: "#12457b"
    },
    error: {
      main: red.A400,
    },
    text: {
      muted: "rgba(0,0,0,0.64)"
    }
  },
});

export default theme;