import React,{Component} from "react";
import loginImg from "../../login.svg";
import './style.scss';
import {connect} from 'react-redux';
 
 class Login extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.email.value);
    console.log(this.password.value);
   
    this.props.changeLoginEmail(this.email.value);
    this.props.changeLoginPassword(this.password.value);
     console.log(this.props);
    }
    render() {
        return (<div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>   
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Email"ref={(input)=>this.email=input}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"ref={(input)=>this.password=input}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={this.handleSubmit}>Login</button>
            </div>
        </div>)
    }
}
const mapStateToProps=(state)=>{
  return {
   
   email:state.email,
   password:state.password
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    
    changeLoginEmail:(email)=>{dispatch({
      type:'logon',
      email:email
    })},
    changeLoginPassword:(password)=>{dispatch({
      type:'logon',
      password:password
    })}
  }}
export default connect(mapStateToProps,mapDispatchToProps)(Login);