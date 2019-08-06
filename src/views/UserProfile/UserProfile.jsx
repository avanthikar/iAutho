import React from "react";
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
    color: "#27d7fa",
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

class UserProfile extends React.Component {
  state = {
    value: 0,
    posts:[]
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount(){
    Axios.get('http://iautho-dev.us-west-1.elasticbeanstalk.com/facility/companyTransactions')
      .then(res => {
        console.log(res)
        this.setState({
          posts: res.data.Items
        }) 
      })

  }


  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;

    const{ posts } = this.state;
    const transactionList = posts.length ? (

      posts.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              <p>{post.transactionTime}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )

    const companyList = posts.length ? (

      posts.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              <p>{post.companyInfo}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )

  return (
    <div>
      <GridContainer>
        {/* <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Facility Profile</h4>
              <p className={classes.cardCategoryWhite}>Subtitle</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Assigned Body Shop"
                    id="body-shop"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Phone Number"
                    id="phone"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
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
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem> */}
        <GridItem xs={18} sm={12} md={18}>
          <Card profile>
            <h2>Facility Profile Information</h2>
            <br></br>
            <br></br>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={Axios.get('http://iautho-dev.us-west-1.elasticbeanstalk.com/facility/icon')} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              {/*facility id issue should be fixed once we store cookies*/}
              {/* <h6 className={classes.cardCategory}> Facility ID: <space> {Axios.get('http://iautho-dev.us-west-1.elasticbeanstalk.com/facility/id')} </space></h6> */}
              <h4 className={classes.cardTitle}>Contact: Alex Thompson</h4>
              <h6 className={classes.cardCategory}>Company ID <space> {companyList[0]}</space></h6>
              <h4 className={classes.cardInfo}>770.310.3939</h4>
              
              {/* <Button color="primary" round>
                More Info
              </Button> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}

export default withStyles(styles)(UserProfile);
