import React, { Component } from 'react'
import './ViewForm.css';
import MyProjectsExample from '../Carousal/components/SecondExample';
import {connect} from 'react-redux';
import AlignItemsList from './listItems';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles' ;
import AppBar from '@material-ui/core/AppBar';




class ViewForm extends Component {
  
    render() {
      return(
      <div class="buttonarea">
        <button class="button1">All</button>
        <button class="button1">Selected</button>
        <button class="button1">Shortlisted</button>
        <button class="button1">Declined</button>
      
            
        <Divider/>
              
              
                
        <AlignItemsList/>
            
          </div>
        );
    }
}

export default (ViewForm);