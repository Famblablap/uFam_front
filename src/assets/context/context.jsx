import { createTheme } from '@mui/material';

export const customTheme = createTheme({
    palette: {
        // palette configuration
    },
    typography: {
        fontFamily:
            'Chewy',
        //Use the 'join' method to transform an Array into a string, with commas separating each element.
        fontSize: 20,
        fontStyle: 'italic'
    }
});