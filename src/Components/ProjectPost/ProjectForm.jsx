import React, { Component } from 'react';
import './ProjectForm.css'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const styles = theme=> ({
  root: {
    flexGrow: 1,
    
    
  },
  paper: {
    height: '100%',
    width: 1000,
    left:'100px'
    
    
    
  },
  control: {
    padding: theme.spacing(2),
  },
 


});

const filestyle = {
  height: 50,
  marginRight: 5,
  marginTop: 20,
  
};


 class ProjectForm extends Component {

  constructor(props) {
    super(props);
    this.state={fileUploadState:""}
    this.inputReference = React.createRef();
  }
     
     
     
    render() {
            const {classes} = this.props;
        return (
            <div >
            
      <Grid container className={classes.root} spacing={2}>
     <Grid item xs={12}>
        <Grid container justify="center" spacing={5}> 
        <Grid key={1} item>
              <Paper elevation={3} className={classes.paper} >
<div class="container">
  <form >
  <div class="row">
      <div class="col-25">
        <label for="category">Category of the Project</label>
      </div>
      <div class="col-75">
        <select id="category" name="category">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subcategory">Sub Category </label>
      </div>
      <div class="col-75">
        <select id="subcategory" name="subcategory">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="projectName">Project Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="ProjectName" name="ProjectName" placeholder="Enter Project Name"/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="typeOfProject">Type of Project </label>
      </div>
      <div class="col-75">
        <select id="typeOfProject" name="typeOfProject">
          <option value="New Project">New Project</option>
          <option value="Ongoing Project">Ongoing Project</option>
          
        </select>
      </div>
    </div>
    
    <div class="row">
      <div class="col-25">
        <label for="Complexity">Complexity</label>
      </div>
      <div class="col-75">
        <select id="Complexity" name="Complexity">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Complex">Complex</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="Project Duration">Project Duration</label>
      </div>
      <div class="col-75">
        <input type="text" id="ProjectDuration" name="ProjectDuration" placeholder="Project Duration"/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="StartDate">Start Date</label>
      </div>
      <div class="col-75">
        <input type="date" id="StartDate" name="ProjectDuration" placeholder="Start Date"/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="End Date">End Date</label>
      </div>
      <div class="col-75">
        <input type="date" id="End Date" name="End Date" placeholder="End Date"/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="ProjectDescription">Project Description</label>
      </div>
      <div class="col-75">
        <textarea id="ProjectDescription" name="Project Description" placeholder="Write something.." style={{height:"100px"}}></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="RequirementDescription">Requirement Description</label>
      </div>
      <div class="col-75">
        <textarea id="RequirementDescription" name="Requirement Description" placeholder="Write something.." style={{height:"100px"}}></textarea>
      </div>
    </div>

<div class="row">
      <div class="col-25">
        <label for="OtherConcerns">Other Concerns</label>
      </div>
      <div class="col-75">
        <textarea id="OtherConcerns" name="Other Concerns" placeholder="Write something.." style={{height:"100px"}}></textarea>
        </div>
        </div>
    

    <div class="row">
      <div class="col-25">
        <label for="PaymentMode">Prefered Payment Mode</label>
      </div>
      <div class="col-75">
        <select id="PaymentMode" name="Payment Mode">
          <option value="HourBased">Hour Based</option>
          <option value="ProjectBased">Project Based</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="MandatorySkills">Mandatory Skills</label>
      </div>
      <div class="col-75">
        <textarea id="MandatorySkills" name="Mandatory Skills" placeholder="Skill expectations from the client.." style={{height:"100px"}}></textarea>
        </div>
        </div>


      <div class="row">
      <div class="col-25">
        <label for="PreferedSkills">Prefered Skills</label>
      </div>
      <div class="col-75">
        <textarea id="PreferedSkills" name="Prefered Skills" placeholder="Skill expectations from the client.." style={{height:"100px"}}></textarea>
        </div>
        </div>


      <div class="row">
      <div class="col-25">
        <label for="AdditionalPerks">Additional Perks</label>
      </div>
      <div class="col-75">
        <textarea id="AdditionalPerks" name="Additional perks" placeholder="Benefits apart from payment.." style={{height:"100px"}}></textarea>
        </div>
        </div>

      <div class="row">
      <div class="col-25">
        <label for="FileUpload">File Upload</label>
      </div>
      <div class="col-75">
        <input type="file"   />
        <Button variant="raised" component="span" className={classes.button}>
          Upload
        </Button>
        {this.state.fileUploadState} 
        </div>
        </div>

        <div class="row">
      <div class="col-25">
        <label for="ContactNumber">Contact Number</label>
      </div>
      <div class="col-75">
        <textarea id="ContactNumber" name="Contact Number" placeholder="contact Number" style={{height:"100px"}}></textarea>
        </div>
        </div>

        <div class="row">
      <div class="col-25">
        <label for="ContactMailId">Contact Mail id</label>
      </div>
      <div class="col-75">
        <textarea id="ContactMailId" name="Contact Mail Id" placeholder="Contact email id.." style={{height:"100px"}}></textarea>
        </div>
        </div>

        <div class="row">
      <div class="col-25">
        <label for="WorkLocation">Work Location</label>
      </div>
      <div class="col-75">
        <select id="WorkLocation" name="Work Location">
          <option value="place">Place</option>
          <option value="virtual">Virtual</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="Questions">Questions</label>
      </div>
      <div class="col-75">
        <textarea id="Questions" name="questions" placeholder="Question for bidders." style={{height:"100px"}}></textarea>
        <input type="file" style={filestyle} />
        <Button variant="raised" component="span" className={classes.button}>
          Upload
        </Button>
        </div>
        </div>
                


    <div class="row">
      <input type="submit" value="Review & Submit"/>
    </div>
  </form>
</div>
</Paper>
</Grid>
</Grid>
</Grid>
</Grid>

            </div>
        )
    }
}
export default withStyles(styles,{theme:true})(ProjectForm);