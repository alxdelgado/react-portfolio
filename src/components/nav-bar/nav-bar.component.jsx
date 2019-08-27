import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

// Style Rules
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }, 
    menuButton: {
        marginRight: theme.spacing(2), 
    }, 
    title: {
        flexGrow: 1,
    },

    link: {
        paddingLeft: '10px',
        cursor: 'pointer', 
        color: '#F8F8F8'
    }, 

    AppBar: {
        backgroundColor: "#505050", 

    }
})); 

// NavBar 
export default function NavBar() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <AppBar className ={classes.AppBar} position="sticky">

                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h7">
                        Alex Delgado 
                    </Typography>

                    <Link className={classes.link} variant="h7" color="inherit" to="https://github.com/alxdelgado">
                       Github
                    </Link>

                    <Link className={classes.link} variant="h7" color="inherit" >
                       Resume
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    )
};