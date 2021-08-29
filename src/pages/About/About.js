import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import AboutContent from './AboutContent';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: 'black',
    fontSize: '3.2rem',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    paddingTop: "25%", 
    color: 'red', 
    fontSize: '2.2rem',
    marginBottom: '2rem',
  },
  goDown: {
    color: 'red',
    fontSize: '4rem',
  },
}));

export default function About() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      {/* <div className="container" style={{backgroundImage: `url("https://www.transparenttextures.com/patterns/black-linen.png")`}}> */}
      <div className="container">
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.container}>
            <h1 className={classes.title}>
              About The<br /><span className={classes.colorText}> Student Union Council </span>
            </h1>
            <Scroll to="about-content" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
              <AboutContent />
            </Scroll>
          </div>
        </Collapse>

      </div>
    </>
  )
}
