import React,{Component} from "react";
import loginImg from "../../login.svg";
import './style.scss';
import {connect} from 'react-redux';
import axios from 'axios';

 
 class Login extends Component {
    constructor(props) {
        super(props);
        
        
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
    }).then(({data})=>{
    this.props.history.push('/home');
    this.props.changecurstatus(true);
    if(data.user.is_business)
    this.props.changeuserrole('business');
    if(data.user.is_official)
    this.props.changeuserrole('individual');
     if(data.user.is_incubator)
    this.props.changeuserrole('incubator');
    }).catch(error=>alert(error));
       
     
   
   
    
    }
    render() {
        return (<div >
        <div className="base-container" ref={this.props.containerRef}>
       
            <div className="header">Login</div>   
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email"type="text" name="email" placeholder="Email"ref={(input)=>this.email=input}onChange={this.handleChange} style={{zIndex:99}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password"type="password" name="password" placeholder="password"ref={(input)=>this.password=input}onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
            <div className="footer" style={{zIndex:9999}}>
                <button type="button" className="btn" onClick={this.handleSubmit}>Login</button>
            </div>
            </div>
            
        </div>)
    }
}




export default(Login);