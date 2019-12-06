import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ToDoList from './components/toDoList';
import TheCalendar from './components/calendar/calendar'

export default function NavBar () {
  

    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/ToDo">ToDo</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/ToDo">
                <ToDo />
              </Route>
              <Route path="/calendar">
                <Calendar />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
    function Home() {
      return <h2>Home</h2>;
    }
    
    function About() {
      return <h2>About</h2>;
    }
    
    function Login() {
        return <h2>Login</h2>
    }

    function ToDo() {
        return <ToDoList />
    }

    function Calendar() {
        return <TheCalendar />
    }