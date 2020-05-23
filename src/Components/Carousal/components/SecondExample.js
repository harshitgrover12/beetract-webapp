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
               
        props.carousalType==='viewBids'?(
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
            <Button style={{top:'200px',left:'80px',backgroundColor:'#CC0099'}}className="CheckButton">
                select
            </Button>
            <Button style={{top:'200px',left:'80px'}}className="CheckButton">
                Shortlist
            </Button>
            <Button style={{top:'200px',left:'80px'}}className="CheckButton">
               Decline
            </Button>
        </Paper>
            ):(<Paper 
            className="Project"
            style={{
                backgroundColor: props.item.color, 
                width:'1000'
            }}
            elevation={10}
        >
            <h1 style={{textAlign:'center'}}>{props.item.CompanyName}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.bidamount}</h1>
            <h1 style={{textAlign:'center'}}>{props.item.Location}</h1>

            <Button className="CheckButton">
                more details
            </Button>
            <Button className="CheckButton1">
                Details
            </Button>
            <Button style={{backgroundColor:'black'}}className="CheckButton1"href="/business/projectBidding/bidProject/bidForm">
                Bid
            </Button>
        </Paper>)}
            </div>
        
    )
}

const items = [
    {
        companyName:"Company Name",
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

 class MyProjectsExample extends Component
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
        this.props.changeCurStatus(true);
        this.props.changeThingType('bidding');
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
                            return <Project carousalType={this.props.carousalType}item={item} key={index}/>
                        })
                    }
                </Carousel>


               
               
                
            </div>
        )
    }
}
export default MyProjectsExample;