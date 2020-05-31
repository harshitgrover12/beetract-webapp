import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    height:900,
   
  },
  checked: {},
  paper: {
    marginTop:'50px',
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    height:100,
    
  },
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
      <Paper className={classes.paper} elevation={10} for="1">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Business</Typography>
             <Radio
             id="1"
        checked={selectedValue === "Business"}
        onChange={handleChange}
        value="Business"
        name="radio-button-demo"
        inputProps={{ 'aria-label': "Business"}}
        style={{top:-2,left:680}}
      />
            <p style={{top:-40,position:'relative'}}>This is business</p>
            
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Startup</Typography>
             <Radio
        checked={selectedValue === 'Startup'}
        onChange={handleChange}
        value="Startup"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Startup' }}
        style={{top:-2,left:680}}
      />
            <p style={{top:-40,position:'relative'}}>This is Startup</p>
            
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Individual</Typography>
            <Radio
        checked={selectedValue === 'Individual'}
        onChange={handleChange}
        value="Individual"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Individual' }}
        style={{top:-2,left:680}}
      />
            <p style={{top:-40,position:'relative'}}>This is Individual</p>
          </Grid>
          
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Incubator</Typography>
            <Radio
        checked={selectedValue === 'Incubator'}
        onChange={handleChange}
        value="Incubator"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Incubator' }}
        style={{top:-2,left:680}}
      />
            <p style={{top:-40,position:'relative'}}>This is Incubator</p>
          </Grid>
        </Grid>
      </Paper>
       <button type="button" value="submit" className="btn" onClick={handleSubmit}> Register</button>
    </div>
  );
}