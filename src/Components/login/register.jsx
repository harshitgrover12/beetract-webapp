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
   
    
    
    let is_official=false;
    let is_business=false;
    let is_assistor=false;
    let is_mentor=false;
    let is_acquirer=false;
    let is_job_seeker=false;
    let is_incubator=false;
    console.log(this.state.first_name);
    if(this.state.userRole==='Official')
    {
        is_official=true;
    }
    if(this.state.userRole==='Business')
    {
        is_business=true;
    }
    if(this.state.userRole==='Assistor')
    {
        is_assistor=true;
    }
    if(this.state.userRole==='Mentor')
    {
        is_mentor=true;
    }
    if(this.state.userRole==='Acquirer')
    {
        is_acquirer=true;
    }
    if(this.state.userRole==='Job Seeker')
    {
        is_job_seeker=true;
    }
    if(this.state.userRole==='Incubator')
    {
        is_incubator=true;
    }
   
   
    axios.post('https://beetract.herokuapp.com/auth/registration/',{
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        email:this.state.email,
        password1:this.state.password,
        is_official:is_official,
        is_business:is_business,
        is_assistor:is_assistor,
        is_mentor:is_mentor,
        is_acquirer:is_acquirer,
        is_job_seeker:is_job_seeker,
        is_incubator:is_incubator        
  }).then(({data})=>console.log(data)).then((response)=>console.log(response)).catch((error)=>alert(error));

    this.props.changelogin(!this.props.isloginactive);
    

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
                        <label htmlFor="userRole">UserRole</label>
                        <select id = "userRole"  ref={(select)=>this.userRole=select} onChange={this.someChange}>
               <option value = "Official">Official</option>
               <option value = "Business">Business</option>
               <option value = "Assistor">Assistor</option>
               <option value = "Mentor">Mentor</option>
               <option value = "Acquirer">Acquirer</option>
               <option value = "Job Seeker">Job Seeker</option>
               <option value = "Incubator">Incubator</option>
             </select>
                        </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" ref={(input)=>this.password=input}onChange={this.someChange}placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button"value="submit" className="btn"onClick={this.handleSubmit}>Register</button>
            </div>
        </div>
    }
}






export default   (Register);