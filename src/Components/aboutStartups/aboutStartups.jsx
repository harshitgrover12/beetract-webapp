import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
    const styles = theme=> ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    height: 600,
    width: 900,
    
    
  },
  control: {
    padding: theme.spacing(2),
  },
 
 
});
class AboutStartups extends Component {


    render() {
         const {classes} = this.props;
         
        return (
            <div >
               <h1 style={{textAlign:'center'}}>About Startups</h1>
               <Grid container className={classes.root} spacing={2}>
     <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {[0, 1].map((value) => (
            <Grid key={value} item>
              <Paper elevation={3} className={classes.paper} >
              <p>
                    What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


              </p>
              </Paper>
            </Grid>
          ))}
          </Grid>
          </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {[0, 1].map((value) => (
            <Grid key={value} item>
              <Paper elevation={3} className={classes.paper} >
              <p>
                    What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


              </p>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
      </Grid>
      
    </Grid>
   
     <TextField className={classes.search} id="filled-search" label="Search field" type="search" variant="filled"style={{top:20,left:900}}/>
            
            </div>
        )
    }
}
export default withStyles(styles,{theme:true})(AboutStartups);