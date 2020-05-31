import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import ProfilePhoto from './../profile.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    aboutMeHeading: {
        textAlign: "center",
    },
    aboutMeText: {
    }
}))
function WorkHistory() {
    const classes = useStyles();
    return (
        <>
            {/* <Box className={classes.photo}>
            </Box> */}

            <Box p={3} className={classes.aboutMeHeading}>
                <Typography variant="h4">
                    Work History
                </Typography>
            </Box>
            <Box p={3}>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi bibendum neque. Amet porttitor eget dolor morbi non arcu risus quis. Orci ac auctor augue mauris. Amet facilisis magna etiam tempor orci. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Augue eget arcu dictum varius duis at consectetur lorem. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Commodo odio aenean sed adipiscing. Placerat in egestas erat imperdiet. Lacus sed viverra tellus in hac. Enim tortor at auctor urna nunc. Habitasse platea dictumst vestibulum rhoncus est. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Lacus viverra vitae congue eu consequat ac felis. Velit egestas dui id ornare arcu odio. Suscipit tellus mauris a diam maecenas sed enim ut sem. Curabitur gravida arcu ac tortor dignissim convallis aenean et.
                Sagittis id consectetur purus ut. Tempor orci dapibus ultrices in iaculis nunc. Urna duis convallis convallis tellus id interdum velit laoreet id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Sodales ut eu sem integer. Ligula ullamcorper malesuada proin libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Sit amet cursus sit amet dictum sit amet. A condimentum vitae sapien pellentesque habitant. Habitant morbi tristique senectus et netus et. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. At tellus at urna condimentum mattis pellentesque id
                </Typography>
            </Box>
        </>
    )
}

export default WorkHistory;