import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import UMassLogoImg from '../../img/umass.png'
// Experience Card
import clsx from 'clsx';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// Experience Card Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:500
  },
  logo: {
    maxHeight: 80,
    maxWidth: 80,
  },
  skillIcon: {
    maxHeight: 18,
    maxWidth: 18,
    marginRight: 5
  },
  inlineFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  cardcontent: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

function ExperienceCard(props) {
  const classes = useStyles();
  const { experienceImage, title, company, location, teamInfo, summary, skills, materialUIDesc } = props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // CardContent has too much padding (only necessary when using CardMedia)
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img className={classes.logo} src={experienceImage} alt={title} />
        }
        action={
          <h4>{company}</h4>
        }
        title={title}
        subheader={location}
        titleTypographyProps={{variant:'h6' }}
      />
      <CardContent className={classes.cardcontent}>
        <Typography variant="subtitle2">
          {teamInfo}
        </Typography>
        <Typography component="body">
          {summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" flexWrap="wrap" css={{ maxWidth: 500 }}>
          {skills.map((value, idx)=>{
            return (
              <Box p={1} key={`${value} ${idx}`} className={classes.inlineFlex}>
                <img src={iconMapping[value]} className={classes.skillIcon} alt="BLAH" />
                <h5>{value}</h5>
              </Box>
            );
          })}
        </Box>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {materialUIDesc()}
        </CardContent>
      </Collapse>
    </Card>
  );
}

const iconMapping = {
  'Android Studio':"https://upload.wikimedia.org/wikipedia/commons/3/34/Android_Studio_icon.svg",
  'Java':"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  'Git': "https://upload.wikimedia.org/wikipedia/commons/a/ad/Git-icon-black.svg",
  'Gradle':"https://upload.wikimedia.org/wikipedia/commons/2/28/Cib-gradle_%28CoreUI_Icons_v1.0.0%29.svg",
  'MongoDB Atlas/Stitch':"https://png2.cleanpng.com/sh/e645d4ad7d8dc8873518201478ccaf2c/L0KzQYm3VMAzN6RvfZH0aYP2gLBuTf1wdph0fNQ2aX7mPbT2jgB2fJZ3ReV4ZoT6ccPsTfJ2e5pzfeV8LYPydsXAggJmNZUyetNELXzoccfsk702aZQ3UaMAZHTnRYi6Wb4xP2Q7SKsDNkG4QoOAUMA3O2gASKgBLoDxd1==/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915ddd5739.0736098615227006379066.png",
  
  'Python':"https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
  'Flask':"https://www.clipartkey.com/mpngs/m/145-1450071_flask-python-logo-transparent.png",
  'Beautiful Soup':"https://python-scripts.com/wp-content/uploads/2019/10/beautifulsoup-html-parsing-example.png",
  'HTML5':"https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_html5-512.png",
  'JavaScript':"https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png",
  'CSS3':"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",

  'Leap Motion':"https://images.squarespace-cdn.com/content/54c95d06e4b04d8d26f97dde/1559240769862-P7VAL66B3PN1T1MAL32A/Leap+Motion+icon.png?content-type=image%2Fpng",
  'Flask-SocketIO':"https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",

  'Ruby':"https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
  'Linux':"https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png",
  'Jenkins':"https://www.jenkins.io/images/logos/automotive/automotive.png",
  'Agile/Jira':"https://www.pngfind.com/pngs/m/616-6169356_a-complete-guide-for-beginners-atlassian-jira-jira.png",
  // PSH = Powershell, abbreviated for mobile to fit
  'PSH':"https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
  'VirtualBox':"https://www.virtualbox.org/graphics/vbox_logo2_gradient.png",
  'React':"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
}

export default function ExperienceTimeline(props) {
  const { id, experienceData } = props
  const classes = useStyles();

  return (
    <Container id={id}>
      <h1 style={{textAlign: "center"}}>My Experience</h1>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="May 2021"
          dateInnerStyle={{ background: '#32a852' }}
          style={{ color: '#32a852' }}
        >
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <img className={classes.logo} src={UMassLogoImg} alt={"UMass Logo"} />
              }
              title={"Graduation - UMass Amherst"}
              subheader={"Amherst, MA"}
              titleTypographyProps={{variant:'h6' }}
            />
            <CardContent className={classes.cardcontent}>
              <Typography component="body">
                I am on course to receive my Computer Science <strong>Bachelor's Degree</strong>
              </Typography>
            </CardContent>
          </Card>
        </TimelineItem>
        {
          experienceData.map((obj, idx) => {
            return (
              <TimelineItem
                key={obj.name + idx}
                dateText={obj.dateText}
                dateInnerStyle={{ background: obj.color }}
                bodyContainerStyle={{
                  borderRadius: '8px',
                  boxShadow: '5px 10px 18px #888888',
                }}
                style={{
                  color: obj.color
                }}
              >
                <ExperienceCard
                  experienceImage={obj.experienceImage}
                  title={obj.title}
                  company={obj.company}
                  location={obj.location} 
                  teamInfo={obj.teamInfo}
                  summary={obj.summary}
                  skills={obj.skills}
                  materialUIDesc={obj.materialUIDesc}
                />
              </TimelineItem>
            )
          })
        }
      </Timeline>
    </Container>
  );
}