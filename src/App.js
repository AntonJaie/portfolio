import React, { createRef } from 'react';
import Home from './pages/Home';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import Header from './components/Header'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {

  const section1Ref = createRef()
  const section2Ref = createRef()
  const section3Ref = createRef()

  const scrollTo = (ref) => {
    if(ref.current) {
      window.scroll({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <Header 
            scrollTo = {scrollTo}
            ref = {{
            ref1: section1Ref,
            ref2: section2Ref,
            ref3: section3Ref
            }}
        />
        <Home
            scrollTo = {scrollTo}
            ref={{ ref1: section1Ref, ref2: section2Ref}}
        />
        <Resume ref={section2Ref}/>
        <Contact ref={section3Ref}/>
      </MuiThemeProvider>
    </>
  );
}

export default App;
