import React from 'react';
import './App.scss';
import { Login, Register } from "./Components/login/index";
import Navbar from "./Components/Navbar/Navbar.jsx";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Circles from './Components/Circles/Circles'; 
import {connect} from 'react-redux';
import AboutStartups from './Components/aboutStartups/aboutStartups';
import ProjectBidding from './Components/ProjectBid/projectbidding';

class App extends React.Component {
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

    this.props.changeLogin(!isLoginActive);
  }


  render() {
    const { isLoginActive } = this.props;
    const current = isLoginActive ? "Register" : "Login";   
    const currentActive = isLoginActive ? "login" : "register";
    return (
      <div style={{maxWidth:'100%',height:'auto',overflow:'hidden'}}>
      <BrowserRouter>
      <Navbar/>
      <Route exact path='/' render={(props)=><Circles{...props} />}/>
      <Route exact path='/aboutStartups' render={(props)=><AboutStartups{...props} />}/>
      <Route exact path='/projectbidding' render={(props)=><ProjectBidding{...props} />}/>
       <Route path='/signIn' render={(props)=>
       <div className="App">
        <div className="login">
          <div className="container">
            {isLoginActive && <Login {...props} containerRef ={ (ref) => this.current=ref}/>}
            {!isLoginActive && <Register {...props} containerRef ={ (ref) => this.current=ref}/>}
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
const mapStateToProps=(state)=>{
  return {
    isLoginActive:state.isLoginActive
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeLogin:(isLoginActive)=>{dispatch({
      type:'LOGIN',
      isLoginActive:isLoginActive
    })}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);