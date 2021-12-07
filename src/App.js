import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Login from './Component/Login'
import Form from './Component/Form'
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Header}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Form}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
