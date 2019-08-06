import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Axios from "axios";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};


// state = {
//   value: 0,
//   posts:[]
// };


class TableList extends React.Component {
  state = {
    value: 0,
    posts:[],
    posts2: []
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount(){
    Axios.get('http://iautho-dev.us-west-1.elasticbeanstalk.com/facility/companyTransactions')
      .then(res => {
        console.log('got axios data')
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
              {/* <span className="card-title">{post.transactionTime}</span> */}
              <p>{post.transactionTime}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )
    
    const{ posts2 } = this.state;
    const companyList = posts2.length ? (

      posts2.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              {/* <span className="card-title">{post.transactionTime}</span> */}
              <p>{post.companyInfo}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )

    const userIdList = posts.length ? (

      posts.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              {/* <span className="card-title">{post.transactionTime}</span> */}
              <p>{post.userId}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )

    const transactionStatusList = posts.length ? (

      posts.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              {/* <span className="card-title">{post.transactionTime}</span> */}
              <p>{post.transactionStatus}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )

    const vinList = posts.length ? (

      posts.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              {/* <span className="card-title">{post.transactionTime}</span> */}
              <p>{post.vin}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )
    
    const tableData1=[]
    var i
    for (i = 0; i < transactionList.length; i++) { 
                tableData1[i]=[transactionList[i] , companyList[i], userIdList[i], transactionStatusList[i], vinList[i]]
                //tableData1[i]=[1, 2, 3, 4, 5]
    }
    
    // userId
    // transactionStatus
    // vin
  return (
    
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>All Transactions</h4>
            <p className={classes.cardCategoryWhite}>
              All Transactions in Table View
              
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Transaction Time", "Company", "User", "Status", "Vin #"]}
              // var i
              // for (i = 0; i < cars.length; i++) { 
              // tableData={[
              //   [transactionList[0] , companyList[0], userIdList[0], transactionStatusList[0], vinList[0]],
              //   [transactionList[1] , companyList[1], userIdList[1], transactionStatusList[1], vinList[1]],
              //   ["10231", "iAutho", "13882", "In Progress", "48423048"]
              // ]}
              tableData={tableData1}
              
             
            />
          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );
}
}



export default withStyles(styles)(TableList);
