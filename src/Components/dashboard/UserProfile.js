import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './UserProfile.css';
import EditProfile from './EditProfile';
const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative',
    '& > *': {
      margin: theme.spacing(1),
      width: 800,
      height: 'auto'
    },
   
  },
   buttons:
    {
      marginLeft:'600px',
      marginTop:'-60px',
      position:'absolute',
      height:50,
      width:'auto'
      
    }
});

class UserProfile extends Component {
  

  state={
    editProfile:false
  }
  

handleClick=(e)=>{
  this.setState(
    {
      editProfile:true
    });
}
changeProfile=(editProfile)=>{
  this.setState({
    editProfile:editProfile
  });
}

render()
{
  const {classes} = this.props;
  return (
    <div className={classes.root}>
      <Paper elevation={10} >
      <h1 style={{marginLeft:'20px',marginTop:'25px'}}>Profile</h1>
      <hr style={{marginLeft:'20px',width:'250px'}}/>
      <Button variant="contained"
            edge="end"
            className={classes.buttons} onClick={this.handleClick}>
          
            Edit Profile
            
         
          </Button>
             {this.state.editProfile===false?(
          <div class="container2">
            <div class="row2">
                <div class="col-251" >
                  Business Name
                </div>
                <div class="col-751">
                 
                </div> 
              </div>
              <div class="row2">
                <div class="col-251" >
                  Category
                </div>
                <div class="col-751">
                
                </div>
              </div>
              <div class="row2">
  <div class="col-251">
    Location
  </div>
  <div class="col-751">
   
  </div>
</div>

<div class="row2">
  <div class="col-251">
   Registration No.
  </div>
  <div class="col-751">
    
  </div>
</div>

<div class="row2">
  <div class="col-251">
    Registration Certificate
  </div>
  <div class="col-751">
    
    </div>
    </div>

    <div class="row2">
  <div class="col-251">
   Sector of Startup
  </div>
  <div class="col-751">
  
  </div>
</div>

<div class="row2">
  <div class="col-251">
   Ownership
  </div>
  <div class="col-751">
   
  </div>
</div>

<div class="row2">
  <div class="col-251">
   Operation Mode
  </div>
  <div class="col-751">
    
  </div>
</div>

<div class="row2">
  <div class="col-251">
   of Employees
  </div>
  <div class="col-751">
    
  </div>
</div>

<div class="row2">
  <div class="col-251">
  Contact Number
  </div>
  <div class="col-751">
   
    </div>
    </div>

    <div class="row2">
  <div class="col-251">
   About Startup
  </div>
  <div class="col-751">
    
    </div>
    </div>

<div class="row2">
  <div class="col-251">
   Web Address
  </div>
  <div class="col-751">
    
    </div>
    </div>




<div class="row2">
  <div class="col-251">
Mobile App Link
  </div>
  <div class="col-751">
    
    </div>
    </div>


  <div class="row2">
  <div class="col-251">
  Point Of Contact
  </div>
  <div class="col-751">
   
    </div>
    </div>


  <div class="row2">
  <div class="col-251">
 Mobile No.
  </div>
  <div class="col-751">
    
    </div>
    </div>

          </div>):(<EditProfile changeProfile={this.changeProfile}/>)
             } 
     
      </Paper>
    
    
    </div>
  );
}
}
export default withStyles(styles,{theme:true})(UserProfile);