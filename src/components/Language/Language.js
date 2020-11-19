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
    <Container id={id} style={{marginBottom:"70px"}}>
      <h3 style={{marginBottom: 0}}>English</h3>
      <span style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Native</span>
      <ScaleBar value={100} />
      <h3 style={{marginBottom: 0}}>Chinese (简体中文)</h3>
      <span style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Professional working proficiency</span>
      <ScaleBar value={80} />
      <h3 style={{marginBottom: 0}}>Japanese (日本語)</h3>
      <span style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Proficient</span>
      <ScaleBar value={60} />
      <h3 style={{marginBottom: 0}}>Spanish (Español)</h3>
      <span style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Elementary proficiency</span>
      <ScaleBar value={30} />
    </Container>
    
  );
} 

export default LanguageSection