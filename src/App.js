import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Header from './Header'
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Dashboard/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
