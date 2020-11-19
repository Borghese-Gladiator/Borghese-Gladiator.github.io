import React from 'react';
// card list components
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// card components
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
// TilebarGridList component
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useGridListStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 250,
    height: 250,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    fontSize: 13
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
 function TitlebarGridList(props) {
  const classes = useGridListStyles();
  const { tileData } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={120} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.name}>
            <img src={tile.img} alt={tile.name} style={{objectFit: 'cover'}} />
            <GridListTileBar
              title={tile.name}
              classes={{
                title: classes.title
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


const useCardStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingTop:0
  },
}));

function SkillsCard(props) {
  const classes = useCardStyles();
  const { titleImg, score, nestedSkills } = props;
  return (
    <Card className={classes.root}>
      <Container style={{ paddingTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
          <img src={titleImg} alt={score} style={{width: 150, height: 150, objectFit: 'cover', paddingRight: '15px'}} />
          <span style={{color: "black", fontSize: 50 }}>{score}</span>
          <span style={{color: "grey"}}>/</span>
          <span style={{color: "grey"}}>10</span>
        </div>
      </Container>

      <CardContent>
        <TitlebarGridList tileData={nestedSkills} />
      </CardContent>
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

export default function SkillsList(props) {
  const { id, skillsData } = props
  const classes = useStyles();

  return (
    <Container id={id} className={classes.root}>
      <h1>Skills Summary</h1>

      <Grid container spacing={3}>
        {skillsData.map((obj, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <SkillsCard
                className={classes.paper}
                titleImg={obj.titleImg}
                score={obj.score}
                nestedSkills={obj.nestedSkills}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}