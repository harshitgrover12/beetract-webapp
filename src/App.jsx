import React,{Component} from 'react';
import './App.scss';
import Routes from './routes';
import {connect} from 'react-redux';
import Navbar from "./Components/Navbar/Navbar.jsx";
class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <Navbar {...this.props}/>
      <Routes{...this.props}/>
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps) (App);
