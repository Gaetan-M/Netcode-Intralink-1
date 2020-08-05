import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Intro from './Components/Intro/Intro.js';
import Login from './Components/Login/Login.js';
import Register from './Pages/Register/Register.js';

import appBg from './Assets/app-bg.png'
import './App.scss';

function App() {
  return (
    <div 
    className="App" 
    style={{backgroundImage:`url(${appBg})`}}>
      <Switch>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/home" render={() => <h1>home page</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
