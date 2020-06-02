import React,{Component} from 'react';
import Login from './Components/login/login.jsx';
import Roles from './Components/login/Roles';
import Register from './Components/login/register'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Assistance from './Components/Assistance/Assistance';
import AboutStartups from './Components/aboutStartups/aboutStartups';
import Business from './Components/Business/Business';
import ProjectForm from './Components/ProjectPost/ProjectForm';
import ViewForm from './Components/ViewForm/ViewForm';
import ProjectBid from './Components/ProjectPost/ProjectBid';
import MyProjectsExample from './Components/Carousal/components/SecondExample';
import ParticleBackground from './Components/ParticlesComponent';
import ProjectBidding from './Components/ProjectBidding/ProjectBidding';
import Seek from './Components/Assistance/Seek';
import Assist from './Components/Assistance/Assist';
import Dashboard from './Components/dashboard/Dashboard';
import UserProfile from './Components/dashboard/UserProfile'




class Routes extends Component{
    constructor(props){
        super(props);
    }
    
  

  changeState() {
    const {isloginactive} = this.props;
    if(isloginactive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    }
    else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.props.changelogin(!this.props.isloginactive);
  }
  


  render() {
    const { isloginactive } = this.props;
    const current = isloginactive ? "Register" : "Login";   
    const currentActive = isloginactive ? "login" : "register";
    return (
      <div style={{maxWidth:'100%',overflow:'hidden',
    
      width:'100%',height:'100%',position:'relative',
      display:'flex',justifyContent:'center'}}>

     
               

       
    <div  id="lpg" >
    {this.props.history.location.pathname!=='/business/dashboard/profile'?
      (<ParticleBackground  />):(<div/>)
    }
      </div>
      
      <Route  path='/aboutStartups' render={(props)=><AboutStartups{...this.props} />}/>
     <Route exact path='/business/dashboard' render={(props)=><Dashboard{...this.props} />}/>
      <Route  path='/business/aboutStartups' render={(props)=><AboutStartups{...this.props} />}/>
       <Route  path='/business' render={(props)=><Business{...this.props} />}/>
       <Route  path='/business/projectBidding/postProject'render={(props)=><div><ProjectForm{...this.props}/>    
       </div>}/>
       <Route path='/business/dashboard/profile' render={(props)=><UserProfile{...this.props}/>}/>
       <Route  path='/roles' render={(props)=><Roles{...this.props}/>}/>
       <Route  path='/business/projectBidding' render={(props)=><ProjectBidding{...this.props}/>}/>
       <Route  path='/business/assistance' render={(props)=><Assistance{...this.props}/>}/>
      
        <Route  path='/business/assistance/seek' render={(props)=><Seek{...this.props}/>}/>
        <Route  path='/business/assistance/assist' render={(props)=><Assist{...this.props}/>}/>
       <Route  path='/business/projectBidding/viewProject' render={(props)=><ViewForm{...this.props}/>}/>
        <Route path='/business/projectBidding/bidProject' render={(props)=><MyProjectsExample{...this.props}/>}/>
        <Route  path='/business/projectBidding/bidProject/bidForm' render={(props)=><ProjectBid{...this.props}/>}/>
       <Route  path='/signIn' render={(props)=>
       <div className="App">
        <div className="login">
          <div className="container">
          
            {isloginactive && <Login {...this.props} containerRef ={ (ref) => this.current=ref} />}
            {!isloginactive && <Register {...this.props} containerRef ={ (ref) => this.current=ref} />}
          </div>
          <RightSide  current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
           
             
              
        </div>
      </div>
       
       }/>
  
      
     
      </div>

    );
  }

  
}

const RightSide = props => {
  return (<div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
export default Routes;
