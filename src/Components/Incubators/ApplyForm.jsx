import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Collapsible from 'react-collapsible';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 15,
    marginTop:15,

    
  }
}));

export default function ApplyForm() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <Card className={classes.root1}>
        <CardContent className={classes.card}>
        <Typography variant="h5" component="h2">
          Incubator Name
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Location
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Offerings:
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
        </Typography>
        <Collapsible trigger="More Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
      </CardActions>
      </Card>
        </Grid>


        <Grid item xs={4}>
        <Card className={classes.root1}>
        <CardContent className={classes.card}>
        <Typography variant="h5" component="h2">
          Incubator Name
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Location
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Offerings:
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
        </Typography>
        <Collapsible trigger="More Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
      </CardActions>
      </Card>
        </Grid>


        <Grid item xs={4}>
        <Card className={classes.root1}>
        <CardContent className={classes.card}>
        <Typography variant="h5" component="h2">
          Incubator Name
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Location
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Offerings:
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
        </Typography>
        <Collapsible trigger="More Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
      </CardActions>
      </Card>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
    <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
    
  );
}