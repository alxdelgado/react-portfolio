import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'; 
import { Typography } from '@material-ui/core';

// Style Rules
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100vw'    
    }, 

    homePage: {
        display: 'grid-template-columns',
        backgroundColor: '#F8F8F8',
        display: 'grid',
        height: '100vw',
    }, 

    headshotImage: {
        borderRadius: 100, 
        maxWidth: "150px",
        position: 'relative', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginTop: '250px',
    }, 

    heroTitle: {
        fontSize: "80px",
        position: 'relative',
        marginBottom: '1000px'
    }
})); 

// Home Page Component
export default function HomePage() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <Box className={classes.homePage} sm={12}>
                <img className={classes.headshotImage} src='alex_arbella.jpg'></img>
                <Typography className={classes.heroTitle}>
                    Alex Delgado
                </Typography>
            </Box>
        </div>
    )
}
 