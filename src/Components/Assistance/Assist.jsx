import React, { Component } from 'react'
import './Seek.css';
import SeekCarousal from '../Carousal/components/SeekCarousal';
 class Assist extends Component {
      componentDidMount=()=>{
        this.props.changeThingType('assistance');
        this.props.changeCarousalType('assist');
    }
    render() {
        
                       return (
            <div>
           
            
         <form class="form-inline" action="/action_page.php">
  <label for="email" style={{fontSize:'20'}}>Aid Assistance For </label>
     <div className="col-75">
        <select id="Aid Assistance For" name="Aid Assistance For ">
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
export default Assist;
