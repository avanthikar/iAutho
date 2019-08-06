import React, {Component} from 'react';
import logo from "./pixel2.png";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class About extends Component{

    

    render(){
            
            return(
                <div classname="home1page">
                <div>
                <h1 className="text-uppercase">About</h1>
                </div>
                <img src={logo} alt="Logo" className="home_page" />
                <img src={logo} alt="Logo" className="home_page" />
                </div>
            )
            
    }
}
export default About;



