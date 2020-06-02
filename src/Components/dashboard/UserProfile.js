import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './UserProfile.css';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative',
    '& > *': {
      margin: theme.spacing(1),
      width: 800,
      height: 700
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
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={10} >
      <h1 style={{marginLeft:'20px',marginTop:'25px'}}>Profile</h1>
      <hr style={{marginLeft:'20px',width:'250px'}}/>
      <Button variant="contained"
            edge="end"
            className={classes.buttons}>
          
            Edit Profile
          </Button>
          <div class="container2">
            <div class="row2">
                <div class="col-251" >
                  Name
                </div>
                <div class="col-751">
                 Harshit Grover
                </div>
              </div>
              <div class="row2">
                <div class="col-251" >
                  Contact
                </div>
                <div class="col-751">
                +91-8427719944
                </div>
              </div>
          </div>
      
     
      </Paper>
    
    
    </div>
  );
}