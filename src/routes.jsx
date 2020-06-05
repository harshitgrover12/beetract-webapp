import React,{Component} from 'react';
import Login from './Components/login/login.jsx';
import Roles from './Components/login/Roles';
import Register from './Components/login/register'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Assistance from './Components/Assistance/Assistance';
import AboutStartups from './Components/aboutStartups/aboutStartups';
import home from './Components/home/home';
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
import Dashboard_individual from './Components/dashboard/Dashboard_Individual'
import Dashboard_incubator from './Components/dashboard/Dashboard_incubator'
import ApplyForm from './Components/Incubators/ApplyForm';

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
    {this.props.history.location.pathname!=='/dashboard'?
      (<ParticleBackground  />):(<div/>)
    }
      </div>
    
      <Route  path='/roles' render={(props)=><Roles{...this.props}/>}/>
 
      {this.props.userrole==='business'?(<div>
        <Route path='/home' render={(props)=><home{...this.props}/>}/>
     <Route path='/dashboard' render={(props)=><Dashboard{...this.props} />}/>
      <Route  path='/aboutStartups' render={(props)=><AboutStartups{...this.props} />}/>
      <Route  path='/applyIncubation' render={(props)=><ApplyForm{...this.props} />}/>
      <Route   path='/postProject'render={(props)=><ProjectForm{...this.props}/>     }/>
      <Route path='/profile' render={(props)=><UserProfile{...this.props}/>}/>
      <Route  exact path='/assistance/seek' render={(props)=><Seek{...this.props}/>}/>
      <Route  exact path='/assistance/assist' render={(props)=><Assist{...this.props}/>}/>
       <Route  exact path='/viewProject' render={(props)=><ViewForm{...this.props}/>}/>
        <Route exact path='/bidProject' render={(props)=><MyProjectsExample{...this.props}/>}/>
        <Route  exact path='/bidProject/bidForm' render={(props)=><ProjectBid{...this.props}/>}/>
        </div>):(<div/>)
      }{
        this.props.userrole==='individual'?(<div>
        <Route path='/home' render={(props)=><home{...this.props}/>}/>
        <Route path='/dashboard' render={(props)=><Dashboard_individual{...this.props}/>}/>
        </div>
        ):(<div/>)

      }
      {
        this.props.userrole==='incubator'?(<div>
        <Route path='/home' render={(props)=><home{...this.props}/>}/>
        <Route path='/dashboard' render={(props)=><Dashboard_incubator{...this.props}/>}/>
        </div>
        ):(<div/>)

      }
       <Route exact path='/signIn' render={(props)=>
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
