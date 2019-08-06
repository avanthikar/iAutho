// import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Axios from 'axios';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import WorkIcon from "components/Typography/Success.jsx";
import SchoolIcon from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const colorz = ["#27d7fa", "#2799fb", "#27d7fa", "#2799fb"];

const isNonZeroArray = a => Array.isArray(a) && a.length > 0;

const takeFirst = a => (isNonZeroArray(a) ? a[0] : null);

const takeLast = a => (isNonZeroArray(a) ? a[a.length - 1] : null);

const isValidDate = date => {
  return date && date instanceof Date && !isNaN(date.getTime());
};

const formattedYear = date => {
  return isValidDate(date) ? String(date.getFullYear()) : '-';
};

const formattedDate = date => {
  if (!isValidDate(date)) return '-';
  const day = String(date.getDate());
  const month = String(date.getMonth() + 1);
  const year = String(date.getFullYear());
  return `${month.length > 1 ? month : '0' + month}/${day.length > 1 ? day : '0' + day}/${year}`;
};

const Dot = props => {
  return (
    <svg className="rt-dot" viewBox="0 0 8 10">
      <circle cx="4" cy="5" r="3" stroke="none" />
    </svg>
  );
};

const Arrow = props => {
  return (
    <svg className="rt-arrow" viewBox="0 0 6 8">
      <g>
        <path d="M 0 0 L 6 4 L 0 8 L 0 0" />
      </g>
    </svg>
  );
};

const DefaultTopLabel = props => {
  // const { event } = props;
  return <div className="rt-label">{Date()}</div>;
};

const DefaultBottomLabel = props => {
  // const { event } = props;
  return <div className="rt-label">{Date()}</div>;
};

const DefaultHeader = props => {
  //const { date, title } = props.event;
  return (
    <div>
      <h2 className="rt-title">{Date()}</h2>
      <p className="rt-date">{Date()}</p>
    </div>
  );
};

const DefaultFooter = props => {
  //const { buttonText, onClick } = props.event;
  // const handleClick = e => {
  //   e.preventDefault();
  //   (onClick || (x => x))(e);
  // };
  return (
    <button className="rt-btn" href="#">
      {/* {buttonText || ''} */}
    </button>
  );
};

const DefaultTextBody = props => {
  const { text } = 'a card';
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const DefaultImageBody = props => {
  const { text } = 'a card';
  return (
    <div>
      <p>{text}</p>
    </div>
  );// const { imageUrl } = props.event;
  // return (
  //   <div>
  //     <img src={imageUrl} alt="" className="rt-image" />
  //   </div>
  // );
};

const ArrowAndDot = props => {
  return (
    <div className="rt-svg-container">
      <Arrow />
      <Dot />
    </div>
  );
};

const Clear = () => {
  return <li key="clear" className="rt-clear" />;
};

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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



class Typography extends React.Component {


  state = {
    value: 0,
    posts: []
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

  
    
    
    // userId
    // transactionStatus
    // vin
  // getStateForProps() {
  //   const { events} = axios.get('http://iautho-dev.us-west-1.elasticbeanstalk.com/user/allTransactions');

  //   if (!isNonZeroArray(events)) {
  //     return { events: [] };
  //   }
  //   return {
  //     events: events
  //       .filter(({ title, date }) => isValidDate(date))
  //       .sort((a, b) => {
  //         return reverseOrder ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
  //       }),
  //   };
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = this.getStateForProps(props);
  // }

  // componentWillReceiveProps(newProps) {
  //   this.setState(this.getStateForProps(newProps));
  // }
  
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
    
  // transactionList.sort()

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


    const transactionIdList = posts.length ? (

      posts.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              {/* <span className="card-title">{post.transactionTime}</span> */}
              <p>{post._id}</p>
            </div>
          </div>
        )
      })

    ) : (
      <div>No Posts Yet</div>
    )

    const signatureList = posts.length ? (

      posts.map(post => {
        return(
          <div className = "postcard" key={post}>
            <div className = "card-content">
              {/* <span className="card-title">{post.transactionTime}</span> */}
              <p>{post._id}</p>
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
                tableData1[i]=[transactionList[i], userIdList[i], transactionIdList[i]]
                //tableData1[i]=[1, 2, 3, 4, 5]
    }
  
    
    // Render nothing with empty events
    // if (!events) {
    //   return <div>{Date()}</div>;
    // }
    // else {
    //   return <div>{'Error in retrieving the JSON data from backend'}</div>;
    // }
    
    
    
    //for every item in eventsList: Create a new verticalTimelineElement in the correct format and append to the verticalTimeline
    //for every item in eventList, externally create a vertical element item and add it to a new list. and then send this list to a parent elemt

    
    
    
    var timeLineElem = []
     for (let i=0; i<transactionList.length; i++){
      console.log('getting 2nd axios data')
      Axios.get('http://iautho-dev.us-west-1.elasticbeanstalk.com/facility/transaction/signature', { params: { 'transaction': '9bdeb121-5948-4883-a47f-b731163e2597' }} )
      .then(res => {
      console.log('got 2nd axios data')
      console.log(res) 
    })
    
    
       timeLineElem.push(
         <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date= {i}
        iconStyle={{ background: 'rgb(90, 0, 0)', color: '#afaaaa' }}
        icon={<WorkIcon />} 
        position='right'
        >
        <h3 className="vertical-timeline-element-title">{transactionList[i]}</h3>
        <h6 className="vertical-timeline-element-title">{userIdList[i]}</h6>
        <h4 className="vertical-timeline-element-title">{transactionIdList[i]}</h4>
        
      
      
        
      </VerticalTimelineElement>)
     }

        
    //     *then return timeLineElem within the VerticalTimeline
    //   )
    // }
    return (
          <div >
            
        
            <VerticalTimeline>
              {timeLineElem}
              
          




        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
          icon={<WorkIcon />}
          position='left'
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>




      




      </VerticalTimeline>
          </div>  
  );
}
}
Typography.displayName = 'Timeline';

Typography.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: Date(),
      title: 'Title',
      imageUrl: 'me',
      text: 'PropTypes.string.isRequired',
      onClick: '',
      buttonText: 'PropTypes.string',
      extras: 'PropTypes.object',
    })
  ).isRequired,
  customComponents: PropTypes.shape({
    topLabel: PropTypes.func,
    bottomLabel: PropTypes.func,
    header: PropTypes.func,
    imageBody: PropTypes.func,
    textBody: PropTypes.func,
    footer: PropTypes.func,
  }),
  reverseOrder: PropTypes.bool,
};

export default (Typography);
