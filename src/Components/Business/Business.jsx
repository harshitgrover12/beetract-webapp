import React, { Component } from 'react'
import {connect} from 'react-redux';
import Particles from 'react-particles-js';
const particlesOptions={
                particles: {
                  number:{
                    value:50, 
                    density:{
                      enable:true,
                      value_area:500 
                    }
                  }
                }
              }
 class Business extends Component {
     constructor(props){
         super(props);
     }
     componentDidMount=()=>{
      console.log(this.props);
     }
    render() {
        return (
            <div >
         
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return {
   curStatus:state.curStatus,
    carousalType:state.carousalType
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeStatus:(curStatus)=>{dispatch({
      type:'STATUS',
      curStatus:curStatus
    })},
     changeCarousalType:(carousalType)=>dispatch({
      type:'CAROUSAL',
      carousalType:carousalType
    })
  }}
export default connect(mapStateToProps,mapDispatchToProps)(Business);
