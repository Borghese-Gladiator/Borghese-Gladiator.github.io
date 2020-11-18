import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
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
  root: {
    marginTop: "40px",
    padding: theme.spacing(10, 10, 10),
    textAlign: "center",
    boxShadow: "5px 10px 8px 10px #888888",
    background: "#fff"
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
  },
  aboutTextContainer: {
    padding: theme.spacing(0, 20, 0)
  }
}));

//Semantic UI Grid uses 16 columns
export default function AboutSection({id, aboutText, currentStatusText }) {
  const classes = useStyles();

  return (
    <Container id={id} className={classes.root}>
      <Divider>Hey there</Divider>
      <br />
      <Typography variant="h5" align="center" color="textPrimary" paragraph>
        I'm Tim Shee, {currentStatusText}
      </Typography>
      <Container className={classes.aboutTextContainer}>
        <Typography variant="p" align="center" paragraph className={classes.aboutText}>
          {aboutText}
        </Typography>
      </Container>
    </Container>
  );
}
/*
Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.

For the past 4 years, I have been 

I love tech and Three internships
I've polished my coding skills over three internships
*/