import React from 'react';
import MyProjectsExample from './SecondExample';
import SeekCarousal from './SeekCarousal';

const App = (props) => (
    <div style={{padding: "40px 100px"}}>
        
       
        
        {props.carousalType==='viewBids'||props.carousalType==='bidProject'?(
        <MyProjectsExample{...props}/>):
        (<div/>)
        }
       { props.carousalType==='seek'||props.carousalType==='assist'?(
        <SeekCarousal{...props}/>):(<div/>)
       }
    </div>
);

export default App;
