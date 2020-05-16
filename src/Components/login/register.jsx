import React,{Component} from "react";
import loginImg from "../../login.svg";
import './style.scss';
import {connect} from 'react-redux';

 class Register extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    this.props.changeName(this.name.value);
    this.props.changeEmail(this.email.value);
    this.props.changePassword(this.password.value);
    
    

}

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>   
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" ref={(input)=>this.name=input}placeholder="username"/>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" ref={(input)=>this.email=input}placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" ref={(input)=>this.password=input}placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn"onClick={this.handleSubmit}>Register</button>
            </div>
        </div>
    }
}
const mapStateToProps=(state)=>{
  return {
   name:state.name,
   email:state.email,
   password:state.password
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeName:(name)=>{dispatch({
      type:'USER',
      name:name
    })},
    changeEmail:(email)=>{dispatch({
      type:'USER',
      email:email
    })},
    changePassword:(password)=>{dispatch({
      type:'USER',
      password:password
    })}
  }}
export default connect(mapStateToProps,mapDispatchToProps)(Register);