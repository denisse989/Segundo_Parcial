import { createTheme } from '@mui/material/styles';


export const ligthTheme =
 createTheme({
    palette: {
        primary: {
            main: '#411530',
        },
        secondary: {
            main: '#F5EBEB'
        }, 
        info:{
            main: '#F7F1E5'
        },
        error: {
            main: '#FFFFF'
        }
    }
})

export const darkTheme =
 createTheme({
    palette: {
        primary: {
            main: '#472D2D',
        },
        secondary: {
            main: '#A77979'
        }, 
        info:{
            main: '#F7F1E5'
        },
        error: {
            main: '#FFFFF'
        }
    }
})