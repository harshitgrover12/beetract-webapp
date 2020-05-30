import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';


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



export default function Roles() {
  const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('a');

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
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
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
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
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
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
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
        checked={selectedValue === 'd'}
        onChange={handleChange}
        value="d"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
        style={{top:-2,left:680}}
      />
            <p style={{top:-40,position:'relative'}}>This is Incubator</p>
          </Grid>
        </Grid>
      </Paper>
      
    </div>
  );
}