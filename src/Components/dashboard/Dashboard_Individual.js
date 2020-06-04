import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Link as link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SpaIcon from '@material-ui/icons/Spa';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 280; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
    background: 'white' // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
   
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
     
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    
  },
  menuButtonHidden: {
    display: 'none',
  },
  search: {
    alignSelf: 'flex-end',
    backgroundColor:'white',
    display: 'flex',
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    flexGrow: 5,
    color:'black'
  },
  about: {
    alignSelf: 'center',
    marginRight: 20,
    color:'black'
  },
  drawerPaper: {
    position: 'absolute',
    whiteSpace: 'noWrap',
    background: ' #04C8DE ',
    width: drawerWidth ,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '140vh',
    paddingLeft: 50,
    overflow: 'auto',
    position: 'relative', //added
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    
    
  },
  fixedHeight: {
    height: 240,
  },
}));





export default function Dashboard_Individual(props) {

  props.changecurstatus(true);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Beetract
          </Typography>


          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.about}>
            About
          </Typography>
          


          <TextField className={classes.search} id="filled-search" label="Search.." type="search" variant="filled"edge="center" />
          <IconButton color="black">
            <Badge color="secondary">
              < SearchSharpIcon />
            </Badge>
          </IconButton>

          

          <IconButton color="black">
            <Badge  color="secondary">
              <AccountCircleIcon  fontSize="large"/>
            </Badge>
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider  />
        <ListItem button component={link} to ="/home" >
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <Divider/>
        <List>     <div>
    <ListItem button>
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="All About Startups" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SpaIcon />
      </ListItemIcon>
      <ListItemText primary="Market Research" />
    </ListItem>
  </div></List>
        <Divider />
        <List><div>
        <ListItem button  >
      <ListItemIcon>
        <PostAddIcon />
      </ListItemIcon>
      <ListItemText primary="Mentor a Startup" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Domain Assist a StartUp" />
    </ListItem>
     
    
   <ListItem button>
    <ListItemIcon>
       <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Acquire a startup " />
    </ListItem>
    </div></List>
        <Divider />
        <List>  
         <div>
    
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Seek a job in startup" />
    </ListItem>
   
    
    <Divider/>
  </div></List>
          <List>     <div>
    <ListItem button onClick={(e)=>{e.preventDefault();
    props.changethingtype('');
props.history.push('/profile')

    }}>
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    
  </div></List> 
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper} >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}