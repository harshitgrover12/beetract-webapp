import React, { Component } from 'react'
import './Seek.css';
import SeekCarousal from '../Carousal/components/SeekCarousal'
class Seek extends Component {
    componentDidMount=()=>{
       
        this.props.changecarousaltype('seek');
    }
    render() {
        return (
            <div>
           
            
         <form class="form-inline" >
  <label for="email" style={{fontSize:'20'}}>Seek Assistance For </label>
     <div className="col-75">
        <select id="Seek Assistance For" name="Seek Assistance For ">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </div>
        </form>
        <SeekCarousal {...this.props}/>
      
    
   

    
            </div>
        )
    }
}
export default Seek;
