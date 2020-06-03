import React, { Component } from 'react'
import './UserProfile.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = (theme)=> ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      height: '100%',
      width: 900,
      
      
    },
    control: {
      padding: theme.spacing(2),
    },
   
  
  
  })

     const filestyle = {
    height: 50,
    marginRight: 5,
    marginTop: 20,
  };
 
class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state={fileUploadState:""}
    this.inputReference = React.createRef();
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.changeProfile(false);
    }
    render()
    {
      const {classes}=this.props;
    
           return (
            
                <div class="container2">
<form >

<div class="row2">
  <div class="col-251">
    <label for="BusinessName">Business Name</label>
  </div>
  <div class="col-751">
    <input type="text" id="BusinessName" name="BusinessName" placeholder="Enter Name of Business"/>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="BusinessCategory">Category </label>
  </div>
  <div class="col-751">
    <select id="BusinessCategory" name="BusinessCategory">
      <option value="Ideation">Ideation</option>
      <option value="Validation">Validation</option>
      <option value="EarlyTraction">Early Traction</option>
      <option value="Scaling">Scaling</option>
      
    </select>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="Location">Location</label>
  </div>
  <div class="col-751">
    <input type="text" id="Location" name="Location" placeholder="Location"/>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="RegNo">Registration No.</label>
  </div>
  <div class="col-751">
    <input type="text" id="RegNo" name="LRegNo" placeholder="Registration number.."/>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="RegistrationCertificate">Registration Certificate</label>
  </div>
  <div class="col-751">
    <input type="file"   />
    <Button variant="raised" component="span" className={classes.button}>
      Upload
    </Button>
    {this.state.fileUploadState} 
    </div>
    </div>

    <div class="row2">
  <div class="col-251">
    <label for="Sector">Sector of Startup</label>
  </div>
  <div class="col-751">
  <select id="Sector" name="Sector">
    <option value="ProductionAndManufacturing">Production and Manufacturing </option>
    <option value="LogisticsAndOperation">Logistics and Operation</option>
    <option value="Administration">Administration</option>
    <option value="FinancialAssistance">Financial Assistance</option>
    <option value="HumanResources">Human Resources</option>
    <option value="TechnologyAssistance">Technology Assistance</option>
    <option value="SalesAndMarketingAssistance">Sales and Marketing Assistance</option>

    </select>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="typeOfOwnership">Ownership</label>
  </div>
  <div class="col-751">
    <select id="OwnershipCategory" name="OwnweshipCategory">
      <option value="Ideation">Ideation</option>
      <option value="Validation">Validation</option>
      <option value="EarlyTraction">Early Traction</option>
      <option value="Scaling">Scaling</option>
      
    </select>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="OperationMode">Operation Mode</label>
  </div>
  <div class="col-751">
    <textarea id="OperationMode" name="Operation Mode" placeholder="Write something.." style={{height:"100px"}}></textarea>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="NoOfEmployees">No of Employees</label>
  </div>
  <div class="col-751">
    <textarea id="NoOfEmployees" name="No Of Employees" placeholder="Write something.." style={{height:"100px"}}></textarea>
  </div>
</div>

<div class="row2">
  <div class="col-251">
    <label for="ContactNumber">Contact Number</label>
  </div>
  <div class="col-751">
    <textarea id="ContactNumber" name="Contact Number" placeholder="contact Number" style={{height:"100px"}}></textarea>
    </div>
    </div>

    <div class="row2">
  <div class="col-251">
    <label for="About Startup">About Startup</label>
  </div>
  <div class="col-751">
    <textarea id="AboutStartup" name="About Startup" placeholder="Breif about the startup..." style={{height:"100px"}}></textarea>
    <input type="file" style={filestyle} />
    <Button variant="raised" component="span" className={classes.button}>
      Upload
    </Button>
    </div>
    </div>

<div class="row2">
  <div class="col-251">
    <label for="Web Address">Web Address</label>
  </div>
  <div class="col-751">
    <textarea id="WebAddress" name="Web Address" placeholder="Your website link.." style={{height:"100px"}}></textarea>
    </div>
    </div>




<div class="row2">
  <div class="col-251">
    <label for="MobileAppLink">Mobile App Link</label>
  </div>
  <div class="col-751">
    <textarea id="MobileAppLink" name="Mobile App Link" placeholder="Your Mobile App Link.." style={{height:"100px"}}></textarea>
    </div>
    </div>


  <div class="row2">
  <div class="col-251">
    <label for="PointOfContact">Point Of Contact</label>
  </div>
  <div class="col-751">
    <textarea id="PointOfContact" name="Point Of Contact" placeholder="Point of Contact for the start Up.." style={{height:"100px"}}></textarea>
    </div>
    </div>


  <div class="row2">
  <div class="col-251">
    <label for="MobileNo">Mobile No.</label>
  </div>
  <div class="col-751">
    <textarea id="MobileNo" name="Mobile No" placeholder="Mobile No of Point of Contact.." style={{height:"100px"}}></textarea>
    </div>
    </div>


<div class="row2">
  <input type="submit" value="Save" onClick={this.handleSubmit}/>
</div>
</form>
</div>
            
        )
    }
    
}
export default withStyles(styles,{theme:true})(EditProfile);

