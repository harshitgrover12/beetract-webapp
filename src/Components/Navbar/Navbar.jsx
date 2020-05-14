import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles,StylesProvider } from "@material-ui/core/styles";
import deepPurple from '@material-ui/core/colors/deepPurple';
import './Navbar.css';

        const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButton1:{
      marginRight:theme.spacing(2),
  },
  toolbar: {
    minHeight: 100,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor:deepPurple['A700'],
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
});




class Navbar extends Component {
    render(){

  const {classes} = this.props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <StylesProvider injectFirst> 
          
          <Button variant="contained"
            edge="start"
            className={classes.menuButton}>
          
            Clients
          </Button>
          <Typography className={classes.title} variant="h5" noWrap>
           Bee-Tract
          </Typography>
          <Button variant="contained" edge="end"  className={classes.menuButton}>
            About
          </Button>
          <Button variant="contained" edge="end"  className={classes.menuButton}href="/signIn">
          signin/signUp
            
          </Button>
          </StylesProvider>
        </Toolbar>
      </AppBar>
    </div>
  );}
}
export default  withStyles(styles, { withTheme: true }) (Navbar);