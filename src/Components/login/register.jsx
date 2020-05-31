import React,{Component} from "react";
import loginImg from "../../login.svg";
import './style.scss';
import {connect} from 'react-redux';
import axios from 'axios';

 class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            userRole:''
        }
    }
    someChange=(e)=>{
        this.setState({
        [e.target.id]:e.target.value
        })
    }
    nameChange=(e)=>{
        console.log(e.target.value);
    let fullName=e.target.value.split(' ');
    this.setState({
        first_name:fullName[0]
    })
    if(fullName.length>1)
    {  
        this.setState({
            last_name:fullName[1]
        })
    }
    }
    
    handleSubmit=(e)=>{
    e.preventDefault();
   
    
    
   const userd={
       first_name:this.state.first_name,
        last_name:this.state.last_name,
        email:this.state.email,
        password1:this.state.password,
        
   }
   this.props.changeuserdata(userd);
   
   this.props.history.push('/roles');

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
                        <label htmlFor="name">name</label>
                        <input id="name" type="text" name="name" onChange={this.nameChange}placeholder="name"/>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" onChange={this.someChange}placeholder="email"/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" ref={(input)=>this.password=input}onChange={this.someChange}placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button"value="submit" className="btn"onClick={this.handleSubmit}> Next </button>
            </div>
        </div>
    }
}






export default   (Register);