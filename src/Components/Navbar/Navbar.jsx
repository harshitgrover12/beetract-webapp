import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles,StylesProvider } from "@material-ui/core/styles";
import deepPurple from '@material-ui/core/colors/deepPurple';
import TextField from '@material-ui/core/TextField';
import './Navbar.css';
import {connect} from 'react-redux';
import {compose} from 'redux';
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
   menuButton2: {
    backgroundColor: '#CC0099',
    display: 'inline-block',
    marginRight: theme.spacing(8),
    fontSize: 15,

  },
  toolbar1: {
    minHeight: 150,
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
  toolbar: {
    minHeight: 140,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor:'#CC0099',
  },
  title: {
    flexGrow: 2,
    alignSelf: 'flex-end',
  },
  search:{
     
    alignSelf: 'flex-end',
    width:280,
    backgroundColor:'white',
    right:460
    
    
  }
});




class Navbar extends Component {
  constructor(props){
    super(props);
    
  }
  handleClick=()=>{
    this.props.changeCurStatus(false);
    window.location.replace("/");
  }

    render(){

  const {classes} = this.props;
  const {curStatus}=this.props;
  
  return (

    <div className={classes.root}>
    {!curStatus?(
       <div>
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
          
           
          
          <TextField className={classes.search} id="filled-search" label="Search field" type="search" variant="filled"edge="center" />
          <Button variant="contained" edge="end"  className={classes.menuButton}>
            About
          </Button>
          
          <Button variant="contained" edge="end"  className={classes.menuButton}href="/signIn">
      signin/signUp
            
          </Button>
     
            
          
          </StylesProvider>
        </Toolbar>
      </AppBar></div>):(<div/>)
          }
          {
             curStatus?(
                       <div className={classes.root}>
              <AppBar position="static">
              <Toolbar className={classes.toolbar}>
              <StylesProvider injectFirst> 
              <Button variant="contained"
              edge="start"
              size="medium"
              className={classes.menuButton}>
          
              Clients
              </Button>

              <Typography className={classes.title} variant="h5" noWrap>
                Bee-Tract
              </Typography>
              <TextField className={classes.search} id="filled-search" label="Search field" type="search" variant="filled"edge="center" />
              <Button variant="contained"
              edge="start"
              size="medium"
              className={classes.menuButton}>
          
              About
              </Button>
              <Button variant="contained"
              edge="start"
              size="medium"
              className={classes.menuButton}>
          
              Profile
              </Button>
              <Button variant="contained" edge="end" size="medium" onClick={this.handleClick} className={classes.menuButton1}onClick={this.handleClick}>
                  SignOut
                </Button>
              </StylesProvider>
                </Toolbar>
              
                <Toolbar className={classes.toolbar1} boxShadow={0}>
                <StylesProvider injectFirst> 
               
              <Button variant="contained" edge="start" size="large"  className={classes.menuButton2} href="/business/postProject">
                    Post a Project
                </Button>

                <Button variant="contained" edge="end"  size="large" className={classes.menuButton2}href="/business/viewProject">
                    View Bids On My Project
                </Button>

                <Button variant="contained" edge="end" size="large" className={classes.menuButton2}href="/business/bidProject">
                    Bid On a Project
                </Button>
                </StylesProvider>
                </Toolbar>
             
            </AppBar>
            </div>
                 ):(<div/>)
          }
          
    </div>
  );}
  
}
const mapStateToProps = state => {
  return {
     isLoginActive:state.isLoginActive,
    curStatus:state.curStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: (isLoginActive) => dispatch({
      type:'LOGIN',
      isLoginActive:isLoginActive
    }),
    changeCurStatus:(curStatus)=>dispatch({
      type:'STATUS',
      curStatus:curStatus
    })
  };
};
export default compose(
  withStyles(styles, { withTheme: true })
  ,
  
  connect(mapStateToProps,mapDispatchToProps),
)(Navbar);