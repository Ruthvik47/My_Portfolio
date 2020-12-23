import React, { Component } from 'react';
import './About.css';
import profilePic from './profile-pic.jpeg';

class About extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 ">
                        <img className="profile-pic" src= {profilePic}  alt="Ruthvik Profile Pic" />
                    </div>
                    <div className="col-md-8 col-12 mt-md-0 mt-3 d-flex flex-column flex-start">
                        <h2>About Me</h2>
    
                        <p>I'm Ruthvik, I'm a Full Stack Developer. Currently Open to work</p>
    
                        <div className="d-flex flex-md-row flex-column mt-md-0 mt-2">
                            <div>
                                <h2>Contact Details</h2>
                                <p>
                                    <span>Ruthvik Reddy Muppidi</span><br />
                                    <span>6600 W 140TH ST</span><br />
                                    <span>Overland Park, Kansas</span>
                                    <span>757-785-7789</span><br />
                                    <span>ruthvikreddy47@gmail.com</span>
                                </p>
                            </div>
    
                            <div className="columns download">
                                <p>
                                    <a href="#" className="button"><i className="fa fa-download"></i>Download
                                        Resume</a>
                                </p>
                            </div>
    
    
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
         );
    }
}
 
export default About;