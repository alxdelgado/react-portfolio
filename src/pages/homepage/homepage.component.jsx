import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'; 

// Style Rules
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,    
    }, 

    homePage: {
        display: 'grid-template-columns',
        backgroundColor: 'grey',
        display: 'grid',
        
    }
})); 

// Home Page Component
export default function HomePage() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <Box className={classes.homePage} sm={12}>
                I'm a container!
            </Box>
        </div>
    )
}
 