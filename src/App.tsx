import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.less'

import Login from './pages/Login'
import Home from './pages/Home'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App