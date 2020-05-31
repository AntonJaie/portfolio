import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import Social from './../components/Social'
const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        margin: 0,
        position: "relative",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#e3e3e3"
    },
    copyright: {
        position: "absolute",
        bottom: 0,
        textAlign: "center",
        width: "100%",
    },
    contact: {
        width: "100%"
    }
}))

function Contact(props, ref) {
    const classes = useStyles();

    return (
        <Box ref={ref} className={classes.root}>
            <Box className={classes.contact} p={10}>
                <Typography variant="h2">Let's Talk</Typography>
                <Box width="60%" p={3}>
                    <Typography variant="h4">
                        If you have a project in mind or are simply interested in finding out more,
                    get in touch and let’s get things moving.
                    </Typography>
                </Box>
                <Box pl={3}>
                    <Social />
                </Box>
            </Box>
            <Box className={classes.copyright}>
                <Divider />
                <Box pt={1} pb={1}>
                    <Typography variant="caption">
                        &copy; Anton de Joya 2020
                    </Typography>
                </Box>
           </Box>
        </Box>
    )
}

export default forwardRef(Contact);