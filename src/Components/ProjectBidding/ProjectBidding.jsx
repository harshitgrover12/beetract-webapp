import React, { Component } from 'react'
import {connect} from 'react-redux';

 class ProjectBidding extends Component {
     constructor(props){
         super(props);
     }
     componentDidMount=()=>{
         this.props.changeStatus('bidding');
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
   curStatus:state.curStatus
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeStatus:(curStatus)=>{dispatch({
      type:'STATUS',
      curStatus:curStatus
    })}
  }}
export default connect(mapStateToProps,mapDispatchToProps)(ProjectBidding);