import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function Copyright() {
    return (
        
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Workout Everyday
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        
    );
}