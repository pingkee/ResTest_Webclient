import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
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
          <Route exact path={'/'} render={() => {
              return <Redirect to={'/home'}/>
          }}/>
          <Route exact path="/home" component={Home} />
          <Route path="/privacypolicy" component={Policy} />
          <Route path="/termsandcondition" component={TermsAndCondition} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
