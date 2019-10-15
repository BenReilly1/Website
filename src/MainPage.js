import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './maincssfile.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ParticlesContainer extends Component {



  render() {
        return ( 
            <>
			<head>
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
			</head>
            <body>
                <div id= 'particles' style={{backgroundColor: '#052252', position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}>
            		<Particles 
                    	params={{
                          "particles": {
                            "number": {
                              "value": 90,
                              "density": {
                                "enable": true,
                                "value_area": 800
                              }
                            },
                            "color": {
                              "value": "#1a00e1"
                            },
                            "shape": {
                              "type": "circle",
                              "stroke": {
                                "width": 0,
                                "color": "#000000"
                              },
                              "polygon": {
                                "nb_sides": 5
                              },
                              "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                              }
                            },
                            "opacity": {
                              "value": 0.24463576890600452,
                              "random": false,
                              "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                              }
                            },
                            "size": {
                              "value": 1,
                              "random": true,
                              "anim": {
                                "enable": false,
                                "speed": 0,
                                "size_min": 0.1,
                                "sync": false
                              }
                            },
                            "line_linked": {
                              "enable": true,
                              "distance": 150,
                              "color": "#ffffff",
                              "opacity": 0.4,
                              "width": 1
                            },
                            "move": {
                              "enable": true,
                              "speed": 3,
                              "direction": "right",
                              "random": false,
                              "straight": false,
                              "out_mode": "out",
                              "bounce": false,
                              "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                              }
                            }
                          },
                          "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                              "onhover": {
                                "enable": false,
                                "mode": "repulse"
                              },
                              "onclick": {
                                "enable": false,
                                "mode": "push"
                              },
                              "resize": true
                            },
                            "modes": {
                              "grab": {
                                "distance": 400,
                                "line_linked": {
                                  "opacity": 1
                                }
                              },
                              "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                              },
                              "repulse": {
                                "distance": 200,
                                "duration": 0.4
                              },
                              "push": {
                                "particles_nb": 4
                              },
                              "remove": {
                                "particles_nb": 2
                              }
                            }
                          },
                          "retina_detect": true
                        }
						}
					/>
                    <div style={{
						position: 'absolute', left: '50%', top: '50%',
						transform: 'translate(-50%, -50%)'
						}}
					>
                    	<h1 style={{color: '#ffffff', fontFamily: 'Roboto'}}>Ben Reilly</h1>
                    	<br/>
                    	<h1 style={{color: '#ffffff'}}>Testing aslkdjblkjb asljm,nklja sbdlkjads</h1>
                    </div>
              	</div>
          </body>
          </>
      )
  }
}

export default ParticlesContainer;