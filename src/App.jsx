import React,{Component} from 'react';
import './App.scss';
import Routes from './routes';
import {connect} from 'react-redux';
import Navbar from "./Components/Navbar/Navbar.jsx";
import back from './back.jpg';
import Particles from 'react-particles-js';
import {BrowserRouter,Route} from 'react-router-dom';
import Circles from './Components/Circles/Circles';

import { withRouter } from "react-router";
import {compose} from 'redux';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div> 
       <BrowserRouter>
       {this.props.history.location.pathname!=='/business/dashboard'?
         (<Navbar{...this.props}/>):(<div/>)
       }
         <Route exact path='/' render={(props)=><div><Circles{...this.props}  />
      </div>}/>
      </BrowserRouter>
      
       <Routes{...this.props} />
      
      
       
          
      
     
      
      
      
        </div> 
     
    )
  }
}
 



const mapStateToProps = state => {
  return {
     isloginactive:state.isloginactive,
    curstatus:state.curstatus,
    carousaltype:state.carousaltype,
    thingtype:state.thingtype,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changelogin: (isloginactive) => dispatch({
      type:'LOGIN',
      isloginactive:isloginactive
    }),
    changecurstatus:(curstatus)=>dispatch({
      type:'STATUS',
      curstatus:curstatus
    }),
    changecarousaltype:(carousaltype)=>dispatch({
      type:'CAROUSAL',
      carousaltype:carousaltype
    }),
    changethingtype:(thingtype)=>dispatch({
      type:'THING',
      thingtype:thingtype
    })
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps)

  
) (App);
