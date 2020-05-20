import React, { Component } from 'react'
import {connect} from 'react-redux';

 class Business extends Component {
     constructor(props){
         super(props);
     }
     componentDidMount=()=>{
         this.props.changeCurStatus(true);
     }
    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Project Bidding</h1>
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
