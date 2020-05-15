import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles,StylesProvider } from "@material-ui/core/styles";

const styles = theme=> ({
    root: {
        flexGrow: 1,
      },
      menuButton1:{
        marginRight:theme.spacing(2),
        alignItems: 'flex-end',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
      toolbar: {
        minHeight: 100,
        alignItems: 'flex-end',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        backgroundColor: '#CC0099',
      },
      title: {
        flexGrow: 2,
        alignSelf: 'flex-end',
      },
    });

  class ProjectBidding extends Component {
      render() {
        const {classes} = this.props;

        return(
            <div className={classes.root}>
              <AppBar position="static">
              <Toolbar className={classes.toolbar}>
              <StylesProvider injectFirst> 
              <Typography className={classes.title} variant="h5" noWrap>
                Bee-Tract
              </Typography>
              <Button variant="contained" edge="end"  className={classes.menuButton1}>
                    Dashboard
                </Button>
              </StylesProvider>
                </Toolbar>

                <Toolbar className={classes.toolbar}>
              <StylesProvider injectFirst> 
              <Button variant="contained" edge="end"  className={classes.menuButton1}>
                    Post a Project
                </Button>

                <Button variant="contained" edge="end"  className={classes.menuButton1}>
                    View Bids On My Project
                </Button>

                <Button variant="contained" edge="end"  className={classes.menuButton1}>
                    Bid On a Project
                </Button>
              </StylesProvider>
                </Toolbar>
            </AppBar>
            </div>
        );}
}

export default  withStyles(styles, { withTheme: true }) (ProjectBidding);