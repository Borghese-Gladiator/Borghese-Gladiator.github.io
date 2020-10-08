import React from 'react'
import { makeStyles, } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(4),
  },
  rail: {
    height: theme.spacing(4),
  },
  track: {
    height: theme.spacing(4),
  },
  mark: {
    height: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  thumb: {
    display: 'none',
  },
}));
function ScaleBar({value}) { 
  const classes = useStyles();
  return (
    <Slider
      value={value}
      step={10}
      min={0}
      max={100}
      marks
      valueLabelDisplay="off"
      classes={{
        root: classes.root,
        rail: classes.rail,
        track: classes.track,
        thumb: classes.thumb,
        mark: classes.mark,
      }}
    />
  );
};

const LanguageSection = function(props) {
  const { id } = props
  return(
    <Container id={id} style={{paddingTop:"35px"}}>
      <h1 style={{textAlign: "center"}}>LANGUAGES</h1>
      <h3>English</h3>
      <p style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Native</p>
      <ScaleBar value={100} />
      <h3>Chinese (简体中文)</h3>
      <p style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Professional working proficiency</p>
      <ScaleBar value={80} />
      <h3>Japanese (日本語)</h3>
      <p style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Elementary proficiency</p>
      <ScaleBar value={60} />
    </Container>
    
  );
} 

export default LanguageSection