import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Aboutme from './../components/Aboutme'
import WorkHistory from './../components/WorkHistory'

const useStyles = makeStyles((theme) => ({
    root: {
       height: "100vh",
       margin: 0,
       backgroundColor: "#e3e3e3",
       position: "relative",
       alignItems: "center",
       display: "flex"
    },
    header: {
        position: "relative",
        textAlign: "center",
        width: "100%",
    },
    aboutMe: {
        width: "50%",
        height: "100vh",
    },
    workHistory:{
        width: "50%",
        height: "100vh"
    }
}))

function Resume(props, ref) {
    const classes = useStyles();

    return (
        <>
            <Box ref={ref} style={{
                margin: 0,
                backgroundColor: "#e3e3e3"
            }}
            >
                <Box style={{position: "relative", width:"100%", height: "70px"}}></Box>
                <Box ref={ref} className={classes.root}>
                    <Box className={classes.aboutMe}>
                        <Aboutme/>
                    </Box>
                    <Box className={classes.workHistory}>
                        <WorkHistory />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default forwardRef(Resume);