import React from 'react';
import MyProjectsExample from './SecondExample';
import SeekCarousal from './SeekCarousal';

const App = (props) => (
    <div style={{padding: "40px 100px"}}>
        
       
        
        {props.thingType==='bidding'?(
        <MyProjectsExample{...props}/>):
        (<div/>)
        }
        <SeekCarousal{...props}/>
    </div>
);

export default App;
