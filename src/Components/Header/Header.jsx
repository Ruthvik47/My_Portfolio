import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    state = {  }


    render() { 
        if(this.props.data){
            var {name:myname, occupation, description, address} = this.props.data;
            var networks = this.props.data.social.map((data)=>{
                return  <li key={data.name}><a href={data.url}><i className={data.className}></i></a></li>
            })
       //  console.log(address);
        }

        return ( 
            <header id="home">

            <nav id="nav-wrap">

               <ul id="nav" className="nav">
                  <li className="current"><a  href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#resume">Resume</a></li>
                  <li><a href="#portfolio">Works</a></li>
                  <li><a href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {myname}.</h1>
                  <h3>I'm a US based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
           
       
         );
    }
}
 
export default Header;