import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Login from './Component/Login'
import About from "./Component/About";
import Contact from "./Component/Contact";
import ProductDisplay from "./Component/ProductDisplay";
import Instructors from "./Component/Instructors";
import MikeSchedule from "./Component/MikeSchedule";
import BrettSchedule from "./Component/BrettSchedule";
import JackSchedule from "./Component/JackSchedule";
import RosieSchedule from "./Component/RosieSchedule";
import CommentList from "./Component/Comments/CommentList";
import Schedule from "./Component/Schedule";
import Register from "./Component/Register";
import YoutubeVideo from './Component/Videos/YoutubeVideo'



function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Header}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/orders' component={ProductDisplay}/>
          <Route path='/instructors' component={Instructors}/>
          <Route path='/instructorschedule' component={MikeSchedule}/>
          <Route path='/instructorschedule1' component={BrettSchedule}/>
          <Route path='/instructorschedule2' component={JackSchedule}/>
          <Route path='/instructorschedule3' component={RosieSchedule}/>
          <Route path='/comments' component={CommentList}/>
          <Route path='/schedule' component={Schedule}/>
          <Route path='/video' component={YoutubeVideo}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
