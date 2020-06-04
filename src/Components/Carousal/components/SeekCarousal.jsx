import React,{Component} from 'react';
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
            <div>
            {
               
        props.carousaltype==='seek'?(
        <Paper 
            className="Project"
            style={{
                backgroundColor: props.item.color, 
                width:'1000'
            }}
            elevation={10}
        >
            <h1 style={{textAlign:'center'}}>{props.item.AssistorName}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.Category}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.Location}</h1>

            <Button className="CheckButton">
                more details
            </Button>
            <Button style={{top:'200px',left:'90px',backgroundColor:'#CC0099'}}className="CheckButton">
                select
            </Button>
             <Button style={{top:'200px',left:'120px',backgroundColor:'black'}}className="CheckButton">
                shortlist
            </Button>
            
           
        </Paper>
            ):(
               <Paper 
            className="Project"
            style={{
                backgroundColor: props.item.color, 
                width:'1000'
            }}
            elevation={10}
        >
            <h1 style={{textAlign:'center'}}>{props.item.StartUpName}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.aidFor}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.Location}</h1>

            <Button className="CheckButton">
                more details
            </Button>
            <Button style={{top:'200px',left:'90px',backgroundColor:'#CC0099'}}className="CheckButton">
                select
            </Button>
             <Button style={{top:'200px',left:'120px',backgroundColor:'black'}}className="CheckButton">
                shortlist
            </Button>
            
           
        </Paper>
            )}

            </div>
        
    )
}

const items = [
    {   StartUpName:"StartUp Name",
        AssistorName:"Assistor Name",
        name: "Project Name",
        Category:'Category',
        aidFor:'aid For',
        Location:'Location',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    },
    {
         StartUpName:"StartUp Name",
         AssistorName:"Assistor Name",
        name: "Project Name",
        Category:'Category',
        aidFor:'Aid For',
        Location:'Location',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    },
    {    StartUpName:"StartUp Name",
         AssistorName:"Assistor Name",
        name: "Project Name",
        Category:'Category',
        aidFor:'Aid For ',
        Location:'Location',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    },
    {
         StartUpName:"StartUp Name",
        AssistorName:"Assistor Name",
        name: "Project Name",
        Category:'Category',
        Location:'Location',
        aidFor:'Aid For ',
        description: "A PDF Reader specially designed for musicians.",
        color: "#FFFF"
    }
]

 class SeekCarousal extends Component
{
    constructor(props)
    {
        super(props);
    console.log(this.props);
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
    componentDidMount=()=>{
      
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
            <div style={{marginTop: "50px",marginLeft:"90px",position:'relative'}}>
                

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
                            return <Project carousaltype={this.props.carousaltype}item={item} key={index}/>
                        })
                    }
                </Carousel>


               
               
                
            </div>
        )
    }
}
export default SeekCarousal;