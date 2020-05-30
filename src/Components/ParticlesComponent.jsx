import React, {Component} from 'react';
import Particles from 'react-particles-js';



class ParticleBackground extends Component {
    render() {
        return (
            <Particles id="particle-bg"
                style={{background: 'linear-gradient(89deg, #FF5EDF 10%, #6200ea 100%)',height:'900'}}
                params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
        );
    }
}

export default ParticleBackground;