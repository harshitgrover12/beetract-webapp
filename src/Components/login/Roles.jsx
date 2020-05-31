import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './Roles.scss';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    height:900,
    textAlign: 'center',

  },
  checked: {},
  paper: {
    marginTop:'50px',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    height:100,
    maxWidth: '600',
    textAlign: 'center',

  },
  heading: {
      height: 50,
      maxWidth: '50%',
      alignSelf: 'flex-start',
      marginRight: 500,
      margin: `${theme.spacing(1)}px auto`,
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 20,
      fontSize: 10,
  },
  button: {
      height: 50,
      width: 800,
      alignSelf: 'center',
      marginRight: '10px',
      marginLeft: '10px',
  }

}));



export default function Roles(props) {
  const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('a');
const handleSubmit=(e)=>{
    e.preventDefault();
   
    
    
    let is_official=false;
    let is_business=false;
    let is_assistor=false;
    let is_mentor=false;
    let is_acquirer=false;
    let is_job_seeker=false;
    let is_incubator=false;
    
    if(selectedValue==='Official')
    {
        is_official=true;
    }
    if(selectedValue==='Business')
    {
        is_business=true;
    }
    if(selectedValue==='Assistor')
    {
        is_assistor=true;
    }
    if(selectedValue==='Mentor')
    {
        is_mentor=true;
    }
    if(selectedValue==='Acquirer')
    {
        is_acquirer=true;
    }
    if(selectedValue==='Job Seeker')
    {
        is_job_seeker=true;
    }
    if(selectedValue==='Incubator')
    {
        is_incubator=true;
    }
   
   
   
    axios.post('https://beetract.herokuapp.com/auth/registration/',{
        first_name:props.userdata.first_name,
        last_name:props.userdata.last_name,
        email:props.userdata.email,
        password1:props.userdata.password1,
        is_official:is_official,
        is_business:is_business,
        is_assistor:is_assistor,
        is_mentor:is_mentor,
        is_acquirer:is_acquirer,
        is_job_seeker:is_job_seeker,
        is_incubator:is_incubator        
  }).then(({data})=>console.log(data)).then((response)=>{console.log(response)
       props.history.push('/business/dashboard');
  }).catch((error)=>alert(error));

   
    

}
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

const handleClick=(event)=>{
    setSelectedValue(event.target.value);
}
  return (
    <div className={classes.root}>
        <Paper className={classes.heading}>
        <FormLabel component="legend">Choose Role</FormLabel>
        </Paper>

        <RadioGroup aria-label="gender" name="radio-button-demo" value={selectedValue} onChange={handleChange}>

      <Paper className={classes.paper} elevation={10} for="1">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>B</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth >
            
            <FormControlLabel  className ={classes.button} 
            value="Business"  
            checked={selectedValue === 'Business'}
            control={<Radio />} 
            label="Business"
            inputProps={{ 'aria-label': 'Business' }}
            labelPlacement="start"
            onChange={handleChange}
            />
            

          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>S</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            
             <FormControlLabel className ={classes.button} 
        checked={selectedValue === 'Startup'}
        onChange={handleChange}
        control={<Radio />} 
        value="Startup"
        label="  Startup  "
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Startup' }}
        labelPlacement="start"
      />
            

          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>I</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            
            <FormControlLabel className ={classes.button} 
        checked={selectedValue === 'Individual'}
        onChange={handleChange}
        value="c"
        label="Individual"
        labelPlacement="start"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Individual' }}
        control={<Radio />} 
      />
          </Grid>

        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>B</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <FormControlLabel className ={classes.button} 
        checked={selectedValue === 'Incubator'}
        onChange={handleChange}
        value="Incubator"
        labelPlacement="start"
        label="Incubator"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Incubator' }}
        control={<Radio />} 
      />
          </Grid>
        </Grid>
      </Paper>
      </RadioGroup>

      <button type="button"value="submit" class="submitbutton"onClick={handleSubmit}>Register</button>

    </div>
  );
}