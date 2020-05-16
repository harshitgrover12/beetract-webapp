import React,{Component} from "react";
import loginImg from "../../login.svg";
import './style.scss';
import {connect} from 'react-redux';
import axios from 'axios';
 
 class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
          email:'',
          password:''
        }
    }
    handleChange=(e)=>{
      
        this.setState({
          [e.target.id]:e.target.value
        })
      
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://beetract.herokuapp.com/auth/login/',{
      email:this.state.email,
      password:this.state.password
    }).then(({data})=>console.log(data));
    
    
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
                        <input id="email"type="text" name="email" placeholder="Email"ref={(input)=>this.email=input}onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password"type="password" name="password" placeholder="password"ref={(input)=>this.password=input}onChange={this.handleChange}/>
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