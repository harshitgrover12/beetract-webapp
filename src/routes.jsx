import React,{Component} from 'react';
import Login from './Components/login/login.jsx'
import Register from './Components/login/register'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Circles from './Components/Circles/Circles'; 
import AboutStartups from './Components/aboutStartups/aboutStartups';
import Business from './Components/Business/Business';
import ProjectForm from './Components/ProjectPost/ProjectForm';
import ViewForm from './Components/ViewForm/ViewForm';
import ProjectBid from './Components/ProjectPost/ProjectBid';
import MyProjectsExample from './Components/Carousal/components/App';

class Routes extends Component{
    constructor(props){
        super(props);
    }
    
  

  changeState() {
    const {isLoginActive} = this.props;
    if(isLoginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    }
    else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.props.changeLogin(!this.props.isLoginActive);
  }
  


  render() {
    const { isLoginActive } = this.props;
    const current = isLoginActive ? "Register" : "Login";   
    const currentActive = isLoginActive ? "login" : "register";
    return (
      <div style={{maxWidth:'100%',height:'auto',overflow:'hidden'}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <BrowserRouter>
      
      <Route exact path='/' render={(props)=><Circles{...this.props}  />}/>
      <Route exact path='/aboutStartups' render={(props)=><AboutStartups{...this.props} />}/>
       <Route exact path='/business' render={(props)=><Business{...this.props} />}/>
       <Route exact path='/business/postProject'render={(props)=><ProjectForm{...this.props}/>}/>
       <Route exact path='/business/viewProject' render={(props)=><ViewForm{...this.props}/>}/>
        <Route exact path='/business/bidProject' render={(props)=><MyProjectsExample{...this.props}/>}/>
        <Route exact path='/business/bidProject/bidForm' render={(props)=><ProjectBid{...this.props}/>}/>
       <Route path='/signIn' render={(props)=>
       <div className="App">
        <div className="login">
          <div className="container">
            {isLoginActive && <Login {...this.props} containerRef ={ (ref) => this.current=ref} />}
            {!isLoginActive && <Register {...this.props} containerRef ={ (ref) => this.current=ref} />}
          </div>
          <RightSide  current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
       
       }/>
      
      </BrowserRouter>
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
