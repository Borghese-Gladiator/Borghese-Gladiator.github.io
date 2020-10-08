import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './About.css'

const Divider = ({ children }) => {
  return (
    <div className="divider-container">
      <div className="divider-border" />
      <span className="divider-content">
        {children}
      </span>
      <div className="divider-border" />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    padding: theme.spacing(15, 0, 40),
    textAlign: "center",
    background: "#0FA3B1"
  },
  // https://stackoverflow.com/questions/23984629/how-to-set-min-font-size-in-css
  headerText: {
    fontSize: "calc(12px + 2.5vw)",
    marginTop: 0,
    marginBottom: 0
  },
  aboutText: {
    fontSize: "calc(16px + 0.1vw)",
    whiteSpace: "pre-wrap",
  }
}));

//Semantic UI Grid uses 16 columns
export default function AboutSection({id, aboutText, currentStatusText }) {
  const classes = useStyles();

  return (
    <div id={id} className={classes.aboutContent}>
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Divider>Hey there</Divider>
        <h3 className={classes.headerText}>I'm Tim</h3>
        <p className={classes.aboutText}>{aboutText}</p>
      </CSSTransitionGroup>
    </div>
  );
}
/*
Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.

For the past 4 years, I have been 

I love tech and Three internships
I've polished my coding skills over three internships
*/