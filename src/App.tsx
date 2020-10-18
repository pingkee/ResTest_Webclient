import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import ContactUs from './Component/ContactUs';
import Home from './Component/Home';
import Notfound from './Component/Notfound';
import Policy from './Component/Policy';
import TermsAndCondition from './Component/TermsAndCondition';

const App = () => {
  return (
    <HashRouter basename='/'>
      <div>
        <Switch>
          <Route path="/privacypolicy" component={Policy} />
          <Route path="/termsandcondition" component={TermsAndCondition} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route component={Notfound} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
