import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';

import { Redirect } from "react-router";
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import HomePage from './HomePage';
import About from './About';
import logo from "./iAuthoLogo.png";
import logo3 from "./applogo.png";
import members from "./members.png";
import facility from "./garage.png";
import insurance from "./insurance2.png";
import logo2 from "./iAutho.svg";
import { Link3, animateScroll as scroll } from "react-scroll";
import { HashLink as Link2 } from 'react-router-hash-link';


// Container = React.createClass({
//   render: function(){
//       return <div>
//           <Home/>
//           <Contact/>
//           <Work/>
//           <About/>
//       </div>;
//   }
// });

// ReactDOM.render(
// <Provider store={createStoreWithMiddleware(reducers)}>
//   <BrowserRouter>
//     <div className='app-container'>
//       <Nav />
//         <Route path='/' component={Container} />
//     </div>
//   </BrowserRouter>
// </Provider>,
// document.querySelector('#app')
// );

class App extends Component {


  constructor(){
    super();

    this.state = {

        email:'',
        password:''
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
  
  render() {

    if (this.state.open) {
      return <Redirect to="/about" push={true} />
    }

    return (
      <Router>    
        <div>
            {/* <div className="App__Aside"></div> */}
            <div className="App">
        
        <div className="container center">
        {/* <nav className="menu">
            <h3 style={{'background-image': 'url(' + logo + ')'}}
              
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
                <div className="PageSwitcher">
        <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
        </div>
            </div>
        </nav> */}
        
        
    </div>

    

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


    
    
    
    {/* 
{ <footer class="footer_area">
        <p>© Company 2017</p>
      </footer> } 
      
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script></link> */}

  
  

        
        
        <Route exact path="/sign-up"  component={SignUpForm}>
        </Route>

        <Route path="/sign-in" component={SignInForm}>  
        </Route>

        <Route path="/home" component={HomePage}>  
        </Route>

        <Route path="/about" component={About}>  
        </Route>

        
      </div>
        </div>
      </Router>
    );
  }
}

export default App;
