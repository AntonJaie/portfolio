import React, { forwardRef } from 'react';
import AppBar from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow:1,
    },
    toolbar: {
        background: 'rgba(227, 227, 227, 0.3)',
        boxShadow: "1px",
        position: "fixed",
    },
}))
function Header(props, ref) {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const { ref1, ref2, ref3 } = ref;

    return (
        <>
        <AppBar className={classes.toolbar}>
              <Toolbar>
                  <Box pt={1} pl={2} className={classes.title}>
                  <Typography variant="h5"  color="secondary" weight="3">
                      ANTON DE JOYA
                  </Typography>
                  </Box>
                  <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                      <Tab label="Home" onClick={() => props.scrollTo(ref1)}/>
                      <Tab label="Resume" onClick={() => props.scrollTo(ref2)}/>
                      <Tab label="Contact" onClick={() => props.scrollTo(ref3)}/>
                  </Tabs>
              </Toolbar>  
        </AppBar>
        </>

    );
}

export default forwardRef(Header);