import React, { Component } from 'react'
import './ViewForm.css';
import SecondExample from '../Carousal/components/App'
class ViewForm extends Component {
    componentDidMount=()=>{
        this.props.changeCurStatus(true);
    }
    render() {
        return (
            <div>
                

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
<SecondExample {...this.props}/>
            </div>
        )
    }
}
export default ViewForm;