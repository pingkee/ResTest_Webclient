import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      RES TEST
      <div>
        <Link to="/termsandcondition">Terms And Condition</Link>
        {/* <Route exact path="/termsandcondition" component={TermsAndCondition} /> */}
        <br/>
        <Link to="/privacypolicy">Privacy Policy</Link>
        {/* <Route exact path="/privacypolicy" component={Policy} /> */}
        <br/>
        <Link to="/ContactUs">Contact Us</Link>
        {/* <Route exact path="/ContactUs" component={ContactUs} /> */}
      </div>
    </div>
  )
};

export default Home;
