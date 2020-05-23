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
    position:'relative',
     
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex:9999,
    

    
  },
  menuButton1:{
      marginRight:theme.spacing(2),
  },
   menuButton2: {
    background: 'black',
    display: 'inline-block',
    marginRight: theme.spacing(8),
    fontSize: 15,

  },
  toolbar1: {
    minHeight: 150,
    alignItems: 'center',
    background: 'linear-gradient(89deg, #FF5EDF 10%, #04C8DE 100%)',
    
  },
  toolbar: {
    minHeight:200,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    zIndex:12,
    
    background: 'linear-gradient(89deg, #FF5EDF 10%, #04C8DE 100%)',
    
    
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
    this.props.changeCurStatus(false);
    window.location.replace("/");
  }
  viewBids=(e)=>{
    e.preventDefault()
    this.props.changeCarousalType('viewBids');
     window.location.replace('/business/projectBidding/viewProject')
  }
  bidProject=(e)=>{
    e.preventDefault();
    this.props.changeCarousalType('bidProject');
    
    window.location.replace('/business/projectBidding/bidProject')
  }
  projectBidding=(e)=>{
    e.preventDefault();
     window.location.replace('/business/projectBidding');
    this.props.changeThingType('bidding');
   
    
  }
  assistance=(e)=>{
    e.preventDefault();
   
    window.location.replace('/business/assistance');
     this.props.changeThingType('assistance');
  }
  seek=(e)=>{
    e.preventDefault();
    this.props.changeCarousalType('seek')
    window.location.replace('/business/assistance/seek')
  }
  assist=(e)=>{
    e.preventDefault();
    this.props.changeCarousalType('assist')
    window.location.replace('/business/assistance/assist')
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
              className={classes.menuButton}href="/business/aboutStartups">
          
            About Startups
              </Button>
              <div class="dropdown">
                  <Button variant="contained" edge="start" size="medium" className={classes.menuButton}>
                  DropDown
                      <i className="fa fa-caret-down"></i>
                      </Button>
                      <div class="dropdown-content">
                      <a style={{cursor:'pointer'}} onClick={this.projectBidding}>Project Bidding </a>
                      <a style={{cursor:'pointer'}} onClick={this.assistance}>Assistance</a>
                      
                      </div>
              </div> 
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
              {this.props.thingType==='bidding' ?(<div>
              <Button variant="contained" edge="start" size="large"  className={classes.menuButton2} href="/business/projectBidding/postProject">
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
            this.props.thingType==='assistance'?(
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
const mapStateToProps = state => {
  return {
     isLoginActive:state.isLoginActive,
    curStatus:state.curStatus,
    carousalType:state.carousalType,
    thingType:state.thingType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: (isLoginActive) => dispatch({
      type:'LOGIN',
      isLoginActive:isLoginActive,
      
    }),
    changeCurStatus:(curStatus)=>dispatch({
      type:'STATUS',
      curStatus:curStatus
    }),
    changeCarousalType:(carousalType)=>dispatch({
      type:'CAROUSAL',
      carousalType:carousalType
    }),
    changeThingType:(thingsType)=>dispatch({
      type:'THING',
      thingType:thingsType,
    })
  };
};
export default compose(
  withStyles(styles, { withTheme: true })
  ,
  
  connect(mapStateToProps,mapDispatchToProps),
)(Navbar);