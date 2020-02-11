import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import Main from './pages/Main';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
