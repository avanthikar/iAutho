import React, {Component} from 'react';
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm2 from './SignUpForm';
import SignInForm from './SignInForm';
import HomePage from './HomePage';
import About from './About';
import logo from "./applogo.png";
import logo2 from "./iAuthoLogo.png";

import PropTypes from 'prop-types';
import './App.css';
import members from "./members.png";
import facility from "./garage.png";
import insurance from "./insurance2.png";
import logo3 from "./iAuthoLogo.png";
import axios from 'axios'
import { validateAll } from "indicative";

class SignUpForm extends Component{

    constructor(){
        super();

        this.state = {
            name:'',
            email:'',
            phoneNumber:'',
            address:'',
            servicesProvided:'',
            type:'',
            latitude:'',
            longitude:'',
            bankAccountNumber:'',
            bankRoutingNumber:'',
            authCode:'',
            password:'',
            password_confirmation:'',
            // retype:'',
            hasAgreed: false,
            isSubmitted: false,
            error: false 
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    state = {
      open: false
    };
    
    handleToggle = () => {
      this.setState(state => ({ open: !state.open}));
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
            // const data = this.state;
            // const rules = {
            //   name: 'required|string',
            //   email: 'required|email',
            //   password: 'required|string|min:8|confirmed'
            // };
            // validateAll(data, rules).then(()=> {
            //   console.log("success!")
            // })
            // .catch(errors => {
            //   console.log('format incorrect!')
            //   console.log(errors);
            // })
            //https://www.iautho.com/facility/register
            axios.post("http://iautho-dev.us-west-1.elasticbeanstalk.com/facility/register", {
              name: this.state.name,
              email: this.state.email,
              phoneNumber: this.state.phoneNumber,
              address: this.state.address,
              servicesProvided: this.state.servicesProvided,
              type: this.state.type,
              latitude: parseInt(this.state.latitude),
              longitude: parseInt(this.state.longitude),
              bankAccountNumber: parseInt(this.state.bankAccountNumber),
              bankRoutingNumber: parseInt(this.state.bankRoutingNumber),
              authCode: this.state.authCode,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation
            })
              .then(res => {
                //not sure if this if/else statement is needed
                if((!(this.state.password.length>=8))){
                  alert("passwords must be min of 8 char with a special character");
                  this.catch(e);
                }
                if(this.state.password!=this.state.password_confirmation){
                  alert("passwords do not match");
                  this.catch(e);
                }
                else{
                  console.log(this.state);
                  this.setState({ isSubmitted: true,
                    error: false})
                    console.log(res)
                    alert("Account Created...Please login");
                    if (this.state.isSubmitted) {
                      return <Redirect to="/signIn" push={true} />
                    }

                }
                
              })
              .catch(error => {
                console.log(this.state);
                 this.setState({error: true,
                isSubmitted: false})})
                 }
                 
        

        
    render(){

      if (this.state.open) {
        return <Redirect to="/home" push={true} />
      }

        return (


          <div className="container">
        <nav className="menu">
            <h3 style={{'background-image': 'url(' + logo3 + ')'}}
              
              className="menu__logo"></h3>

            <div className="menu__right">
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

                    {/* <li className="menu__list-item"><NavLink
                    activeClassName= "menu__link--active" className="menu__link" 
                    activeClass="active"
                    to="/about"
                    spy={true}
                    smooth={true}
                    scroll={true}
                    offset={-10}
                    duration= {500}
                    >About</NavLink></li> */}
                </ul>
                {/* <div className="PageSwitcher">
        <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
        </div> */}
            </div>
        </nav> 
            <div className="FormCenter">

<div className="FormTitle">
          <NavLink to="/signIn" activeClassName="FormTitle__Link--Hover"
          className="FormTitle__Link">Sign In</NavLink>  | 
          <NavLink exact to="/signUp" activeClassName="FormTitle__Link--Hover" className="FormTitle__Link">Sign Up</NavLink>
        </div>

          
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Name  </label>
                <input type="text" id="name" className="FormField__Input" placeholder= "Full Name" name="name" value={this.state.name} onChange = {this.handleChange}/>
                </div>  
  
                
                <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email </label>
                <input type="text" id="email" className="FormField__Input" placeholder= "Email Address" name="email" value={this.state.email} onChange = {this.handleChange}/>
                </div>    
  
                <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Phone Number </label>
                <input type="number" id="phone" className="FormField__Input" placeholder= "Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange = {this.handleChange}/>
                </div> 
  
  
                <div className="FormField">
                <label className="FormField__Label" htmlFor="Address">Address</label>
                <input type="text" id="Address" className="FormField__Input" placeholder= "Address" name="address" value={this.state.address} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="Services">Services Provided</label>
                <input type="text" id="Services" className="FormField__Input" placeholder= "Services" name="servicesProvided" value={this.state.servicesProvided} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="Type">Type of Facility</label>
                <input type="text" id="Type" className="FormField__Input" placeholder= "Type of Facility" name="type" value={this.state.type} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Latitude </label>
                <input type="number" id="Latitude" className="FormField__Input" placeholder= "Latitude" name="latitude" value={this.state.latitude} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Longitude </label>
                <input type="number" id="Longitude" className="FormField__Input" placeholder= "Longitude" name="longitude" value={this.state.longitude} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Bank Account Number </label>
                <input type="number" id="bankAccountNum" className="FormField__Input" placeholder= "Bank Account Number" name="bankAccountNumber" value={this.state.bankAccountNumber} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Bank Routing Number</label>
                <input type="number" id="bankRoutingNum" className="FormField__Input" placeholder= "Bank Routing Number" name="bankRoutingNumber" value={this.state.bankRoutingNumber} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="Type">Auth Code</label>
                <input type="text" id="Type" className="FormField__Input" placeholder= "Authorization Code" name="authCode" value={this.state.authCode} onChange = {this.handleChange}/>
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder= "Enter Password - min 8 char w/ 1 number, 1 special char" 
                name="password" value={this.state.password} onChange={this.handleChange} />
                </div> 

                <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Retype Password</label>
                <input type="password" id="password_confirmation" className="FormField__Input" placeholder= "Retype Password" 
                name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
                </div> 

                
  
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed}/> 
                  <space> </space> I agree to the statements outlined in iAutho's <a href= "google.com" className="FormField__TermsLink" onChange={this.handleChange}> terms of service</a>
                </label>  
  
                <div className="FormField">
                <button className="FormField__Button" type='submit' onClick={this.handleSubmit}>Create Account </button>
                </div>  

                <div className="FormField_AlternateLink"> 
                  <NavLink to="/signIn" className="FormField__Link">Already a member</NavLink>
                </div>
  
            </form>

            {this.state.isSubmitted && <p>Success! Creating Account...</p> }
            {this.state.error && <p>Looks like there is an error. Please ensure all fields are entered correctly, or the account may have already been created.</p> }
          </div>
          </div>
      );
    }
}
export default SignUpForm;