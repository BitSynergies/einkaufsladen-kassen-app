import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#5B8C5A', contrastText: '#fff' },
    secondary: { main: '#F4845F', contrastText: '#fff' },
    background: { default: '#FFF8F0', paper: '#FFFDF7' },
    text: { primary: '#3B2F2F' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Nunito", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 600,
    button: { fontWeight: 800, textTransform: 'none' },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF8F0',
          color: '#3B2F2F',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 800,
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': { borderWidth: 2 },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundColor: '#FFFDF7' },
      },
    },
  },
})

export default theme
