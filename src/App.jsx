import React,{Component} from 'react';
import './App.scss';
import Routes from './routes';
import {connect} from 'react-redux';
import Navbar from "./Components/Navbar/Navbar.jsx";
import back from './back.jpg';
import Particles from 'react-particles-js';
import {BrowserRouter,Route} from 'react-router-dom';
import Circles from './Components/Circles/Circles';


const particlesOptions={
                particles: {
                  number:{
                    value:10, 
                    density:{
                      enable:true,
                      value_area:300 
                    }
                  }
                },
                "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
              }
class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div  style={{
      
       }} >
       <Navbar {...this.props}/>
       <BrowserRouter>
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
      isLoginActive:isLoginActive
    }),
    changeCurStatus:(curStatus)=>dispatch({
      type:'STATUS',
      curStatus:curStatus
    }),
    changeCarousalType:(carousalType)=>dispatch({
      type:'CAROUSAL',
      carousalType:carousalType
    }),
    changeThingType:(thingType)=>dispatch({
      type:'THING',
      thingType:thingType
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
