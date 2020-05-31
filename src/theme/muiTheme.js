import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#cccccc',
            contrastText: '#000000',
        },
        secondary: {
            light: '#000000',
            main: '#2c2c2c',
            dark: '#000000',
            contrastText: '#ffffff'
        }
    }
});

export default theme;