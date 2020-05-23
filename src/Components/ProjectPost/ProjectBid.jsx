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
    width: 900,
    
    
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
  


 class ProjectBid extends Component {

  constructor(props) {
    super(props);
    this.state={fileUploadState:""}
    this.inputReference = React.createRef();
  }
     
     
     componentDidMount(){
         this.props.changeCurStatus(true);
         this.props.changeThingType('bidding');
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
        <label for="Amount">Amount</label>
      </div>
      <div class="col-75">
        <input type="text" id="from" name="from" placeholder="Transferred from.."/>
        <input type="text" id="to" name="to" placeholder="Transferred to.."/>
      </div>
    </div>

    
    <div class="row">
      <div class="col-25">
        <label for="additionalCharges">Additional  Charges</label>
      </div>
      <div class="col-75">
        <input type="text" id="additionalCharges" name="additionalCharges" placeholder="If any..."/>
      </div>
    </div>


    <div class="row">
      <div class="col-25">
        <label for="startdate">Start Date</label>
      </div>
      <div class="col-75">
        <input type="date" id="startdate" name="startdate" placeholder=" "/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="completionplan">Completion Plan</label>
      </div>
      <div class="col-75">
        <input type="text" id="completionplan" name="completionplan" placeholder="Brief note on the project completion plan"/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="otherconcerns">Other Concerns</label>
      </div>
      <div class="col-75">
        <input type="text" id="otherconcerns" name="otherconcerns" placeholder="Any concerns"/>
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
        <label for="MandatorySkills">Obtained Mandatory Skills</label>
      </div>
      <div class="col-75">
        <textarea id="MandatorySkills" name="Mandatory Skills" placeholder="Skills possesed.." style={{height:"100px"}}></textarea>
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
        <input type="file"  />
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
        <label for="screeningQuestions">Screening Questions Answered</label>
      </div>
      <div class="col-75">
        <textarea id="screeningQuestions" name="screeningQuestions" placeholder="Question, if any.." style={{height:"100px"}}></textarea>
        <input type="file" style={filestyle}/>
        <Button variant="raised" component="span" className={classes.button}>
          Upload
        </Button>
        </div>
        </div>

        <div class="row">
      <div class="col-25">
        <label for="Questions">Contact Mail id</label>
      </div>
      <div class="col-75">
        <textarea id="Questions" name="Questions" placeholder="Questions raised to company.." style={{height:"100px"}}></textarea>
        </div>
        </div>
                


    <div class="row">
      <input type="submit" value="Review & Post"/>
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
export default withStyles(styles,{theme:true})(ProjectBid);