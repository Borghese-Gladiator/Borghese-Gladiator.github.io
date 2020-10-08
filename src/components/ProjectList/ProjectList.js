import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function MyCard(props) {
  const { header, about, imgSrc, iconSrc, link, madeAtEvent, eventLink,  } = props
  console.log(iconSrc)
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={about}
          height="200"
          image={imgSrc}
          title={about}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {header}
          </Typography>
          <Typography variant="body2" component="p">
            {about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        {madeAtEvent &&
          <Button size="small" color="primary" href={eventLink} target="_blank" rel="noopener">
            Event Info
          </Button>
        }
        <Button size="small" color="primary" href={link} target="_blank" rel="noopener">
          Visit Website <ArrowForwardIosIcon />
        </Button>
      </CardActions>
    </Card>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 0, 10),
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const { id, projectData } = props
  const classes = useStyles()

  /*
  xs (for phones - screens less than 768px wide)
  sm (for tablets - screens equal to or greater than 768px wide)
  md (for small laptops - screens equal to or greater than 992px wide)
  lg (for laptops and desktops - screens equal to or greater than 1200px wide)
  */
  return (
    <Container id={id} className={classes.root}>
      <h1>My Projects</h1>
      <h3>Here are a few projects I've worked on recently. Want to see more? <a href="mailto:tim.shee0791@gmail.com" style={{color: "#FF0000"}}>Email me</a></h3>
      
      <Grid container spacing={3}>
        {projectData.map((obj, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <MyCard
                className={classes.paper}
                header={obj.header}
                about={obj.about}
                imgSrc={obj.imgSrc}
                iconSrc={obj.iconSrc}
                madeAtEvent={obj.madeAtEvent}
                eventLink={obj.eventLink}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}