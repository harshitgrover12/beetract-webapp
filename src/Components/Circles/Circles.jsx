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
            
  <div class="row" >  
        <a href="/aboutStartups">
        <svg width="300" height="290">
            <circle cx="130" cy="150" r="130"  fill="#262626" />
                <text x="130" y="150" text-anchor="middle"fill="white" style={{fontSize:25}}>
                 All About StartUps
                </text>
        </svg></a>
        
    </div>
    <div class="row">   
       
     <svg width="350" height="240"  >
            <circle cx="120" cy="120" r="120"  fill="#262626" />
                <text x="120" y="120" text-anchor="middle"style={{fontSize:25,marginLeft:'70px'}} fill="white" >
                Incubators
                </text>
        </svg>
       <svg width="350" height="240">
            <circle cx="190" cy="120" r="120"  fill="#CC0099" />
                <text x="190" y="120" text-anchor="middle"fill="white"style={{fontSize:25}} >
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