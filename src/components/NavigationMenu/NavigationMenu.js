import React from 'react';
// Appbar & Sidebar opening
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx'; // clsx is a tiny utility for constructing className strings conditionally, out of an object with keys being the class strings, and values being booleans.
import { Drawer, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
// Appbar content
import { Typography, Divider, IconButton } from '@material-ui/core';
import { Link as ScrollLink } from "react-scroll";
// Sidebar content
import { Link, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import JavaIcon from '../../assets/icons/icons8-java-48.png'
import ReactIcon from '../../assets/icons/icons8-react-100.png'
import JavaScriptIcon from '../../assets/icons/icons8-javascript-48.png'
import PythonIcon from '../../assets/icons/icons8-python-48.png'
import FadeIn from 'react-fade-in';
import KittenPuppyImg from '../../img/kitten-puppy-cute.png'
import { blue, green } from '@material-ui/core/colors';
// navbar icons
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';
// responsive navbar
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
// sidebar icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// font from CSS stylesheet
import './NavigationMenu.css'

import { MenuItem, ListItemIcon } from '@material-ui/core'


// React Scroll Link (not Material UI Link)
// hence requires prop forwarding or well get rendered as 0x0 in production (development worked fine)
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <ScrollLink to={to} ref={ref} color="inherit" spy={true} smooth={true} offset={-70} duration={500} {...itemProps} />),
    [to],
  );

  return (
    <ListItem button component={renderLink} innerDivStyle={{paddingRight: 10}}>
      <ListItemIcon style={{minWidth: '25px'}}>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
}

const drawerWidth = 275;

// Material UI - CSS Media Queries (https://material-ui.com/customization/breakpoints/)
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    opacity: 0.7,
    backgroundBlendMode: "normal,luminosity",
    backdropFilter: 'blur(5px)',
    boxShadow: '3px 6px 20px rgba(104,102,255,.44), -3px -6px 10px hsla(0,0%,100%,.6)'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  title: {
    display: 'block',
    fontFamily: "Precious"
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#262626",
    color: "white",
  },
  drawerImage: {
    width: `calc(${drawerWidth}px - 20px)`,
    borderRadius: "10%"
  },
  linkHover: {
    '&:hover': {
      backgroundColor: blue[300],
    }
  },
  iconSize: {
    width: `calc(${drawerWidth}px / 5)`,
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  lightBlue: {
    color: '#fff',
    backgroundColor: blue[300],
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {[
        { text: 'Home', link: 'home', iconFunc: () => { return <HomeIcon /> } },
        { text: 'About', link: 'about', iconFunc: () => { return <AccountCircleIcon /> } },
        { text: 'Experience', link: 'experience', iconFunc: () => { return <WorkIcon /> } },
        { text: 'Projects', link: 'projects', iconFunc: () => { return <AppsIcon /> } },
        { text: 'Skills', link: 'skills', iconFunc: () => { return <CodeIcon /> } }
      ].map((obj, idx) => {
        // React Scroll Link (not Material UI Link)
        return (
          <MenuItem>
            <ListItemLink
              key={`${obj.text} ${idx}`}
              to={obj.link}
              icon={obj.iconFunc()}
              primary={obj.text}
            />
          </MenuItem>
        )
      })}
    </Menu>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{
          backgroundColor: "#262626"
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography className={classes.title} variant="h3" noWrap>
            Timothy Shee
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {[
              { text: 'Home', link: 'home', iconFunc: () => { return <HomeIcon style={{fill: "white"}} /> } },
              { text: 'About', link: 'about', iconFunc: () => { return <AccountCircleIcon style={{fill: "white"}} /> } },
              { text: 'Experience', link: 'experience', iconFunc: () => { return <WorkIcon style={{fill: "white"}} /> } },
              { text: 'Projects', link: 'projects', iconFunc: () => { return <AppsIcon style={{fill: "white"}} /> } },
              { text: 'Skills', link: 'languages', iconFunc: () => { return <CodeIcon style={{fill: "white"}} /> } }
            ].map((obj, idx) => {
              return (
                <ListItemLink
                  key={`${obj.text} ${idx}`}
                  to={obj.link}
                  icon={obj.iconFunc()}
                  primary={obj.text}
                />
              )
            })}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{fill: "white"}} /> : <ChevronRightIcon style={{fill: "white"}} />}
          </IconButton>
        </div>
        <Divider />
        <div style={{textAlign:"center"}}>
          <FadeIn delay='500' transitionDuration='500'>
            <h3 style={{ fontWeight: 'bold', color:"#f7f7f7"}}>TIMOTHY SHEE</h3>
            <img src={KittenPuppyImg} className={classes.drawerImage} alt="Kitten Sidebar" />
            <br />
            <h1>Developer.</h1>
            <br />
            <div style={{display: "flex" }}>
              {[
                { text: "Java", iconAltText: "Java Icon", iconPath: JavaIcon },
                { text: "JS", iconAltText: "JavaScript Icon", iconPath: JavaScriptIcon },
                { text: "React", iconAltText: "React Icon", iconPath: ReactIcon },
                { text: "Python", iconAltText: "Python Icon", iconPath: PythonIcon },
              ].map((obj, idx) => {
                return (
                  <div key={"SidebarSkills" + idx}>
                    <img src={obj.iconPath} alt={obj.iconAltText} className={classes.iconSize} />
                    <span>{obj.text}</span>
                  </div>
                )
              })}
            </div>
            <br />
            <List>
              {[
                { text: 'tim.shee0791@gmail.com', link: '"mailto:tim.shee0791@gmail.com', avatarColorClass: classes.green, iconFunc: () => { return <MailIcon style={{fill: "black"}} /> } },
                { text: 'GitHub', link: 'https://github.com/Borghese-Gladiator', avatarColorClass: classes.green, iconFunc: () => { return <GitHubIcon style={{fill: "black"}} /> } },
                { text: 'LinkedIn', link: 'https://www.linkedin.com/in/timothy-shee-aa46a5170/', avatarColorClass: classes.lightBlue, iconFunc: () => { return <LinkedInIcon style={{fill: "black"}} /> } }
              ].map((obj, idx) => {
                return (
                  <Link target="_blank" rel="noopener noreferrer"
                    href={obj.link}
                    style={{
                      color: 'inherit',
                      fontSize: "15px"
                    }}
                    key={"SidebarContact" + idx}
                  >
                    <ListItem button key={obj.text + idx} className={classes.linkHover}>
                      <ListItemAvatar>
                        <Avatar>
                          {obj.iconFunc()}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={obj.text} />
                    </ListItem>
                  </Link>
                )
              })}
            </List>
          </FadeIn>
        </div>
      </Drawer>
    </div>
  );
}
