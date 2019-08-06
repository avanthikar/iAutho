import React, {Component} from 'react';
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm2 from '../../layouts/SignUpForm';
import SignInForm from '../../layouts/SignInForm';
import HomePage from '../../layouts/HomePage';
import About from '../../layouts/About';
// import logo from "./applogo.png";
// import logo2 from "./iAuthoLogo.png";

import PropTypes, { number } from 'prop-types';
// import './App.css';
// import members from "./members.png";
// import facility from "./garage.png";
// import insurance from "./insurance2.png";
// import logo3 from "./iAuthoLogo.png";
import axios from 'axios';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";
import Axios from "axios";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class NewTransaction extends React.Component{

    constructor(){
        super();

        this.state = {
            vin: '',
            userId: '',
            invoiceAmount:'',
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
            axios.post("http://iautho-dev.us-west-1.elasticbeanstalk.com/facility/transaction", {
              vin: this.state.vin,
              userId: this.state.userId,
              invoiceAmount: parseFloat(this.state.invoiceAmount),
            })
              .then(res => {

                 this.setState({ isSubmitted: true,
                error: false})
                console.log(res)
              })
              .catch(error => {
                
                 this.setState({error: true,
                isSubmitted: false})})
                 }
                
        

        
    render(){
      const { classes } = this.props;
      if (this.state.open) {
        return <Redirect to="/dashboard" push={true} />
      }

        return (
          

          <div className="container">

            <GridItem xs={14} sm={14} md={14}>
                      <Card>
                        <CardHeader color="primary">
                          <h4 className={classes.cardTitleWhite}>New Transaction</h4>
                          <p className={classes.cardCategoryWhite}>Fill the form below and submit to Transaction Table</p>
                        </CardHeader>
                        <CardBody onSubmit={this.handleSubmit}>
                          <GridContainer onSubmit={this.handleSubmit}>
                            <GridItem xs={12} sm={12} md={5}>
                              <CustomInput
                                labelText="Vin"
                            
                                
                                inputProps={{
                                  name:"vin",
                                  value:this.state.vin,
                                  onChange:this.handleChange
                                  }}
                                
                        
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                               
  
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                              <CustomInput
                                labelText="User Id"
                            
                                
                                inputProps={{
                                  name:"userId",
                                  value:this.state.userId,
                                  onChange:this.handleChange
                                  }}
                                
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <CustomInput
                                labelText="Invoice Amount"
                            
                                
                                inputProps={{
                                  name:"invoiceAmount",
                                  type: 'number',
                                  value:this.state.invoiceAmount,
                                  onChange:this.handleChange
                                  }}
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                            </GridItem>
                          </GridContainer>
                          {/* <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                              <CustomInput
                                labelText="First Name"
                                id="first-name"
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <CustomInput
                                labelText="Last Name"
                                id="last-name"
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={4}>
                              <CustomInput
                                labelText="City"
                                id="city"
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <CustomInput
                                labelText="Country"
                                id="country"
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <CustomInput
                                labelText="Postal Code"
                                id="postal-code"
                                formControlProps={{
                                  fullWidth: true
                                }}
                              />
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <InputLabel style={{ color: "#AAAAAA" }}>Personal Info</InputLabel>
                              <CustomInput
                                labelText="Extra Information:"
                                id="about-me"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  multiline: true,
                                  rows: 5
                                }}
                              />
                            </GridItem>
                          </GridContainer> */}
                        </CardBody>
                        <CardFooter>
                          <Button color="primary" onClick={this.handleSubmit}>Submit Transaction</Button>
                        </CardFooter>
                      </Card>
                    </GridItem>
                    {this.state.isSubmitted && <p>FORM SUBMITTED</p> }
                    {this.state.error && <p>ERROR!!!</p> }
                      </div>
      );
    }
}
export default withStyles(styles)(NewTransaction);