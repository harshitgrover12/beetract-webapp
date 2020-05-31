import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Collapsible from 'react-collapsible';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Startup Name"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Bid Amount
              </Typography>
              {"  — Location…"}
              <Collapsible trigger="Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
            </React.Fragment>
            
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Startup Name"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                 Bid Amount
              </Typography>
              {" — Location…"}
              <Collapsible trigger="Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Startup Name"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Bid Amount
              </Typography>
              {' — Location…'}
              <Collapsible trigger="Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Startup Name"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Bid Amount
              </Typography>
              {" — Location…"}
              <Collapsible trigger="Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Startup Name"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Bid Amount
              </Typography>
              {" — Location…"}
              <Collapsible trigger="Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Startup Name"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Bid Amount
              </Typography>
              
              {" — Location…"}
              <Collapsible trigger="Details">
             <p>This is the collapsible content. It can be any element or React component you like.</p>
             <p>It can even be another Collapsible component. Check out the next section!</p>
           </Collapsible>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}