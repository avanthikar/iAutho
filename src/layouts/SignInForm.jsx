import React, {Component} from 'react';
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm2 from './SignInForm';
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
// import { Auth } from "aws-amplify";
import { validateAll } from "indicative";

const BASE_URL = "https://www.iautho.com"

class SignInForm extends Component{

    constructor(){
        super();

        this.state = {

            email:'',
            password:'',
            isSubmitted: false,
            error: false,
            isAuthenticated: false,
            invalid: false,
            valid: false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    // async componentDidMount() {
    //   try {
    //     await Auth.currentSession();
    //     this.userHasAuthenticated(true);
    //   }
    //   catch(e) {
    //     if (e !== 'No current user') {
    //       alert(e);
    //     }
    //   }
    
    //   this.setState({ isAuthenticating: false });
    // }

    state = {
      open: false
    };
    handleToggle = () => {
      this.setState(state => ({ open: !state.open }));
    };
  
    // validateForm() {
    //   return this.state.email.length > 0 && this.state.password.length > 0;
    // }

    userHasAuthenticated = authenticated => {
      this.setState({ isAuthenticated: authenticated });
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
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
            //   email: 'required|email',
            //   password: 'required|string|min:8|confirmed'
            // };
            // validateAll( data, rules)
            //   .then(() => {
            //     console.log('success')
            //   })
            //   .catch(errors => {
            //     console.log(errors)
            //   })
            

            axios.post("https://www.iautho.com/facility/login", {
              email: this.state.email,
              password: this.state.password
            })
              .then(res => {
                // await Auth.signIn(this.state.email, this.state.password);
                this.setState({ isSubmitted: true,
                error: false, valid:true})
                console.log(res)
                
                
                
              })
              .catch(error => {
                 alert("Invalid credentials - please try again");
                 this.setState({error: true,
                isSubmitted: false, invalid: true})
                // if (!(this.state.isSubmitted)) {
                //   alert("boo");
                //   return <Redirect to="./SignUpForm" />
                // }
              
              })
                 }
                 
              

            /*check password to make sure it is valid account*/
            /*redirect to admin/dashboard*/
            
        
 

    render(){
      
      if (this.state.open) {
        return <Redirect to="/home" push={true} />
      }
      if ((this.state.invalid)) {
        this.setState({invalid: false})
        return <Redirect to="/signIn" push={true} />
      }
      if (this.state.valid) {
        alert("Logging in... press OK to continue");
        return <Redirect to="/admin/dashboard" push={true} />
      }
      
      const childProps = {
        isAuthenticated: this.state.isAuthenticated,
        userHasAuthenticated: this.userHasAuthenticated
      };
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

                <label className="FormField__Label" htmlFor="email">Email Address </label>
                <input type="email" autoFocus="True" id="email" className="FormField__Input" placeholder= "Enter Email" 
                name="email" value = {this.state.email} onChange={this.handleChange}/>
                </div>  
  
                
                <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder= "Enter Password" 
                name="password" value={this.state.password} onChange={this.handleChange} />
                </div>    
  
                <div className="FormField">
                <button className="FormField__Button" type="submit">Sign In </button> 
                </div>  

                {/* if (this.state.navigate) {
        return <Redirect to="/login" push={true} */}

                <div className="FormField_AlternateLink"> 
                  <NavLink to="/signUp" className="FormField__Link">Create an account</NavLink>
                </div>  
            </form>

            {this.state.isSubmitted && <p>Success! Logging in...</p> }
            
            {this.state.error && <p> Could not login. Please try again</p> }

          </div>
          </div>

          
      );
    }
}
export default SignInForm;
// export default ({ childProps }) =>
//   <Switch>
//     <AppliedRoute path="/" exact component={Home} props={childProps} />
//     <AppliedRoute path="/login" exact component={Login} props={childProps} />
//     { /* Finally, catch all unmatched routes */ }
//     <Route component={NotFound} />
//   </Switch>;