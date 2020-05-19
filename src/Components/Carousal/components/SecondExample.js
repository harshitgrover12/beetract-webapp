import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    FormLabel,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    Paper,
    Button,
    Slider,
    Typography
} from '@material-ui/core'

import "../style/SecondExample.scss"

function Project(props)
{
    return (
        <Paper 
            className="Project"
            style={{
                backgroundColor: props.item.color, 
                width:'1000'
            }}
            elevation={10}
        >
            <h1 style={{textAlign:'center'}}>{props.item.name}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.bidamount}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.Location}</h1>

            <Button className="CheckButton">
                more details
            </Button>
        </Paper>
    )
}

const items = [
    {
        name: "Project Name",
        bidamount:'Bid Amount',
        Location:'Location',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    },
    {
        name: "Project Name",
        bidamount:'Bid Amount',
        Location:'Location',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    },
    {
        name: "Project Name",
        bidamount:'Bid Amount',
        Location:'Location',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    },
    {
        name: "Project Name",
        bidamount:'Bid Amount',
        Location:'Location',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    }
]

export default class MyProjectsExample extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false
        }

        autoBind(this);
    }

    toggleAutoPlay()
    {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators()
    {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible()
    {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    changeAnimation(event)
    {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value)
    {
        this.setState({
            timeout: value
        })
    }

    render()
    {
        return (
            <div style={{marginTop: "50px",marginLeft:"450px",}}>
                <h2>List of Biddings</h2>

                <Carousel 
                    className="SecondExample"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    
                    
                >
                    {
                        items.map( (item, index) => {
                            return <Project item={item} key={index}/>
                        })
                    }
                </Carousel>


               
               
                
            </div>
        )
    }
}