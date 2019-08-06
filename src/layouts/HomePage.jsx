import React, {Component} from 'react';
import logo from "./applogo.png";
import logo2 from "./iAuthoLogo.png";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import members from "./members.png";
import facility from "./garage.png";
import insurance from "./insurance2.png";
import logo3 from "./iAuthoLogo.png";


class HomePage extends Component{

    constructor(){
        super();

        this.state = {

            email:''
        };


        this.handleChange = this.handleChange.bind(this);

    }

    state = {
      open: false
    };
    handleToggle = () => {
      this.setState(state => ({ open: !state.open }));
    };
  
    

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
        handleSubmit(e) {
            e.preventDefault();
            console.log('The form was submitted with the following data:');
            console.log(this.state);
            
            /*check password to make sure it is valid account*/
            /*redirect to admin/dashboard*/
            
        }

    render(){
        if (this.state.open) {
            return <Redirect to="/signIn" push={true} />
          }
            return(

            
        <div className="container">
        <nav className="menu">
            <h3 style={{'background-image': 'url(' + logo3 + ')'}}
              
              className="menu__logo"></h3>

            {/* <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><NavLink
                    activeClassName= "menu__link--active" 
                    className="menu__link" 
                    activeClass="home"
                    to="/home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {2}
                    >Home</NavLink></li>

                    <li className="menu__list-item"><NavLink
                    activeClassName= "menu__link--active" className="menu__link" 
                    activeClass="active"
                    to="/about"
                    spy={true}
                    smooth={true}
                    scroll={true}
                    offset={-10}
                    duration= {500}
                    >About</NavLink></li>
                </ul>
                {/* <div className="PageSwitcher">
        <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
        </div> 
            </div>  */}
        </nav> 
                <div><img src={logo} className="home_page2"/></div> */

    <div class="container2">
      <div class="row">
        <div class="col-md-4">
        <img src={members} className="home_page"/>
          <h2 class="textColumns">Customer</h2>
          <p> The iAutho Mobile App enables customers to view transactions.</p>
         
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          <div className="FormField">
          <a href="http://www.google.com">
                <button className="Home__Button"> Download </button></a>
                </div>
        </div>
        <div class="col-md-4">
        <img src={facility} className="home_page"/>
          <h2 class="textColumns">Facility</h2>
          <p> Facility authorities can sign in and view customer records via web dashboards. </p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          <div className="FormField">
          
                <button className="Home__Button" onClick={this.handleToggle}> Log In </button> 
                </div> 
       </div>
        <div class="col-md-4">
        <img src={insurance} className="home_page"/>
          <h2 class="textColumns">Insurance</h2><p> Insurance companies will soon be able to approve transactions on iAutho.</p>
          
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          <div className="FormField">
          <a href="http://www.google.com">
                <button className="Home__Button"  onclick="location.href='http://www.google.com'" type="button"> Register </button> </a>
                </div> 
        </div>
      </div>
      
      
      {/* <div class="container2">
      <footer class="footer_area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="footer_top flex-column">
                        <div class="footer_logo">
                            <a href="#">
                                <img src="img/logo.png" alt=""/>
                            </a>
                            <h4>Coming Soon</h4>
                        </div>
                        <div class="footer_social">
                            <a href="https://www.facebook.com/pages/category/Product-Service/IAutho-899266960241589/"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/iautho"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer_bottom justify-content-center">
                <p class="col-lg-8 col-sm-12 footer-text">
                    
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | iAutho
</p>
            </div>
        </div>
    </footer> 
  </div> */}

</div>


        

        <footer class="footer_area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="footer_top flex-column">
                        <div class="footer_logo">
                            {/* <a href="#">
                                <img src="img/logo.png" alt=""/>
                            </a> */}
                            <h4>Coming Soon</h4>
                        </div>
                        <div class="footer_social">
                            <a href="https://www.facebook.com/pages/category/Product-Service/IAutho-899266960241589/"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/iautho"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer_bottom justify-content-center">
                <p>
                Copyright &copy; <space></space> {new Date().getFullYear()} <script>document.write(new Date().getFullYear());</script> <br></br>All rights reserved <br></br> iAutho &copy;</p>
            </div>
        </div>
    </footer>

</div>

            )
            
    }
}
export default HomePage;



