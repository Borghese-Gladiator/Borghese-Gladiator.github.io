import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// AboutRoles Container
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
// AboutRoles Card
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// AboutRoles Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const cardUseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: "center"
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
  },
  headerColor: {
    color: "#355C7D",
  },
  listItemCenter: {
    textAlign: "center"
  }
}));

function RecipeReviewCard(props) {
  const classes = cardUseStyles();
  const { title, icon, titleText, desc, useDesc, toolNamesList } = props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <IconButton aria-label="settings">
        {icon()}
      </IconButton>
      <CardHeader
        titleTypographyProps={{variant:'h4' }}
        title={titleText}
      />
      <CardContent>
        <Typography variant="subtitle1" component="p">
          {desc}
        </Typography>
        <br />
        <Typography variant="h6" className={classes.headerColor}>
          Things I enjoy building
        </Typography>
        <Typography variant="body">
          {useDesc}
        </Typography>
        <br />
        <br />
        <Typography variant="h6" className={classes.headerColor}>
          {title} Tools
        </Typography>
        <List dense={true} style={{paddingTop:0}}>
          {toolNamesList.map((value, idx) => {
            return (
              <ListItem key={`${value} ${idx}`} className={classes.listItemCenter}>
                <ListItemText
                  disableTypography
                  primary={<Typography variant="subtitle1">{value}</Typography>}
                />
              </ListItem>
            )
          })}
        </List>
      </CardContent>
      <CardActions disableSpacing>
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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "-30vh",
    padding: "5vh",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function AboutRoles(props) {
  const classes = useStyles();
  const { id, aboutRolesData } = props

  return (
    <Container id={id} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {aboutRolesData.map((obj, idx) => (
              <Grid key={`${obj.title} ${idx}`} item>
                <RecipeReviewCard
                  title={obj.title}
                  icon={obj.icon}
                  titleText={obj.titleText}
                  desc={obj.desc}
                  useDesc={obj.useDesc}
                  toolNamesList={obj.toolNamesList}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
