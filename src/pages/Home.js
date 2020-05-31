import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './../bg.jpg'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Social from './../components/Social'
const useStyles = makeStyles((theme) => ({
    backgroundCss: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        margin: 0,
        position: "relative",
        alignItems: "center",
    },
    headings: {
        margin: 0,
        paddingTop: "20%"
    },
    social: {
        margin: 0,
        textAlign: "center"
    },
    footer: {
        margin: 0,
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems: "center",
        textAlign: "center",
    },
    button: {
        '&:hover': {
            backgroundColor: '#969496',
            opacity: 0.5
        }
    }
}))

function Home(props, ref) {
    const classes = useStyles();

    const { ref1, ref2 } = ref;
    return (
            <Box ref={ref1} className={classes.backgroundCss}>
                
                <Box className={classes.headings}>
                    <Typography variant="h1" align="center">Hi! I am Anton</Typography>
                    <Typography variant="h3" align="center">I design and build awesome applications</Typography>
                </Box>
                <Box className={classes.social}>
                    <Social />
                </Box>
                <Box className={classes.footer} pb={2}>
                    <Box>
                    <IconButton className={classes.button} onClick={() => props.scrollTo(ref2)}>
                        <ExpandMoreIcon />
                    </IconButton>
                    </Box> 
                </Box>
            </Box>
    )
}

export default forwardRef(Home);