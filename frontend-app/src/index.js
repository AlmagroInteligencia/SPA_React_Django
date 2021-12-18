import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/NavBar/Navbar';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';

ReactDOM.render(
  <BrowserRouter>
      <Navbar/>
      <div className="container my-4">
          <Switch>
              <Route exact path="/" component={TaskList}/>
              <Route path="/taskform" component={TaskForm}/> 
          </Switch>
      </div>
      </BrowserRouter>,    
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
