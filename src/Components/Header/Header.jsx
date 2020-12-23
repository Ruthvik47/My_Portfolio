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
       
           
       
         );
    }
}
 
export default Header;