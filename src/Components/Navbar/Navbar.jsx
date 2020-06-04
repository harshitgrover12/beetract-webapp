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
import { Link } from 'react-router-dom'


        const styles = theme => ({
  root: {
    flexGrow: 1,
    position:'relative',
     
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex:9999,
    color: 'white',
    backgroundColor: '#000000',
    
   

    
  },
  menuButton1:{
      marginRight:theme.spacing(2),
         color: 'white',
    backgroundColor: '#000000',
  },
   menuButton2: {
    
    marginRight: theme.spacing(2),
       color: 'white',
    backgroundColor: '#000000',

  },
  toolbar1: {
    minHeight: 150,
    alignItems: 'center',
    background: 'linear-gradient(89deg, #FF5EDF 10%, #6200ea 100%)'
    
  },
  toolbar: {
    minHeight:200,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    zIndex:12,
    
    background: 'linear-gradient(89deg, #FF5EDF 10%, #6200ea 100%)',
    
    
    display:'flex',
  },
  title: {
    flexGrow: 2,
    alignSelf: 'flex-end',
  },
  search:{
     
    alignSelf: 'flex-end',
    bottom:50,
    width:280,
    backgroundColor:'white',
    right:460,
    display:'flex',
    
    
  }
});




class Navbar extends Component {
  constructor(props){
    super(props);
    
  }
  
  handleClick=(e)=>{
    e.preventDefault()
    this.props.changecurstatus(false);
    this.props.history.push("/");
  }
  viewBids=(e)=>{
    e.preventDefault()
    this.props.changecarousaltype('viewBids');
    
     this.props.history.push('/viewProject')
  }
  bidProject=(e)=>{
    e.preventDefault();
    this.props.changecarousaltype('bidProject');
    
    this.props.history.push('/bidProject')
  }
  projectBidding=(e)=>{
   
     
    this.props.changethingtype('bidding');
   
    
  }
  postProject=(e)=>{
    this.props.changethingtype('bidding');
    this.props.history.push('/postProject');
  }
  handleDashboard=(e)=>{
    this.props.history.push('/dashboard');
  }
  assistance=(e)=>{
    e.preventDefault();
   
    this.props.history.push('/assistance');
     this.props.changethingtype('assistance');
  }
  seek=(e)=>{
    e.preventDefault();
    this.props.changecarousaltype('seek')
    this.props.history.push('/assistance/seek')
  }
  assist=(e)=>{
    e.preventDefault();
    this.props.changecarousaltype('assist')
    this.props.history.push('/assistance/assist')
  }
 
    render(){

  const {classes} = this.props;
  const {curstatus}=this.props;
  
  return (

    <div className={classes.root}>
     
    {!curstatus?(
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
          <Button variant="contained" edge="end"  className={classes.menuButton}href="/aboutStartups">
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
             curstatus?(
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
              className={classes.menuButton}href="/aboutStartups">
          
            About Startups
              </Button>
             
              <Button variant="contained"
              edge="start"
              size="medium"
              className={classes.menuButton}>
          
              About
              </Button>
              <Button variant="contained"
              
              size="medium"
              className={classes.menuButton} component={Link} to="/profile">
              
          
              Profile
              </Button>
              <Button variant="contained" edge="end" size="medium" onClick={this.handleClick} className={classes.menuButton1}onClick={this.handleDashboard}>
                  Dashboard
                </Button>
              <Button variant="contained" edge="end" size="medium" onClick={this.handleClick} className={classes.menuButton1}onClick={this.handleClick}>
                  SignOut
                </Button>
              </StylesProvider>
                </Toolbar>
              
                <Toolbar className={classes.toolbar1} boxShadow={0}>
                <StylesProvider injectFirst> 
              {this.props.thingtype==='bidding' ?(<div>
              <Button variant="contained" edge="start" size="large"  className={classes.menuButton2} onClick={this.postProject}>
                    Post a Project
                </Button>

                <Button variant="contained" edge="end"  size="large" className={classes.menuButton2}onClick={this.viewBids}>
                    View Bids On My Project
                </Button>

                <Button variant="contained" edge="end" size="large" className={classes.menuButton2} onClick={this.bidProject}>
                    Bid On a Project
                </Button></div>):(<div/>)
              }
              {
            this.props.thingtype==='assistance'?(
              <div>
              <Button variant="contained" edge="start" size="large"  className={classes.menuButton2} onClick={this.seek}>
                    Seek
                </Button>

                <Button variant="contained" edge="end"  size="large" className={classes.menuButton2} onClick={this.assist}>
                   Assist
                </Button>
              </div>
            ):(<div/>)
          }
                </StylesProvider>
                </Toolbar>
             
            </AppBar>
            </div>
                 ):(<div/>)
          }
          
          
    </div>
  );}
  
}

export default compose(
  withStyles(styles, { withTheme: true })
  
)(Navbar);