import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import {Circle } from 'react-shapes';
import './Circles.scss';
import {connect} from 'react-redux';

class Circles extends Component{
    
    handleClick=(curStatus)=>{
        
        this.props.changestatus(curStatus);
    }
    render(){
        return(
            <div >   
            <div class="container" >
            
  <div class="row" style={{zIndex:'3'}}>  
        <a href="/aboutStartups">
        <svg width="280" height="240">
            <circle cx="120" cy="120" r="120"  fill="#262626" />
                <text x="120" y="120" text-anchor="middle"fill="white" style={{fontSize:25}}>
                 All About StartUps
                </text>
        </svg></a>
        
    </div>
    <div class="row">   
       
     <svg width="280" height="240"  >
            <circle cx="120" cy="120" r="120"  fill="#262626" />
                <text x="120" y="120" text-anchor="middle"style={{fontSize:25}} fill="white" >
                Incubators
                </text>
        </svg>
       <svg width="280" height="240">
            <circle cx="120" cy="120" r="120"  fill="#CC0099" />
                <text x="120" y="120" text-anchor="middle"fill="white"style={{fontSize:25}} >
                Market Research
                </text>
        </svg>
    </div>
    <div class="row">   
        <svg width="280" height="240" >
            <circle cx="120" cy="120" r="120"  fill="#CC0099" />
                <text x="120" y="120" text-anchor="middle"fill="white" style={{fontSize:25}}>
                 Assistance
                </text>
        </svg>
     
       <svg width="280" height="240" >
            <circle cx="120" cy="120" r="120"  fill="#262626" />
                <text x="120" y="120" text-anchor="middle" fill="white"style={{fontSize:25}}>
                 Project Bidding
                </text>
        </svg>
        
    </div>
    </div>
      
      </div>
      
      
      
            
        )
    }
}

export default Circles;