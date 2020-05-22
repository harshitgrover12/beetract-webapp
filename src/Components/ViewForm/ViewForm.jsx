import React, { Component } from 'react'
import './ViewForm.css';
import MyProjectsExample from '../Carousal/components/App';
import {connect} from 'react-redux';
class ViewForm extends Component {
    componentDidMount=()=>{
        this.props.changeCurStatus(true);
        this.props.changeCarousalType('viewBids')
    }
    render() {
        return (
            <div >
                

<table class="responstable">
  
  <tr>
    <th>All</th>
    <th data-th="bid-status"><span>Shortlisted</span></th>
    <th>Selected</th>
    <th>Declined</th>
    
  </tr>
  
  <tr>
    <td>hello</td>
    <td>Steve</td>
    <td>Foo</td>
    <td>01/01/1978</td>
 
  </tr>
  
  <tr>
    <td>Hello</td>
    <td>Steffie</td>
    <td>Foo</td>
    <td>01/01/1978</td>
    
  </tr>
  
  <tr>
    <td>hello</td>
    <td>Stan</td>
    <td>Foo</td>
    <td>01/01/1994</td>
   
  </tr>
  
  <tr>
    <td>hello</td>
    <td>Stella</td>
    <td>Foo</td>
    <td>01/01/1992</td>
    
  </tr>
  
</table>

<MyProjectsExample {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
     isLoginActive:state.isLoginActive,
    curStatus:state.curStatus,
    carousalType:state.carousalType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: (isLoginActive) => dispatch({
      type:'LOGIN',
      isLoginActive:isLoginActive
    }),
    changeCurStatus:(curStatus)=>dispatch({
      type:'STATUS',
      curStatus:curStatus
    }),
    changeCarousalType:(carousalType)=>dispatch({
      type:'CAROUSAL',
      carousalType:carousalType
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (ViewForm);