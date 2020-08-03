import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import Goals from "./pages/Goals"
import Calendar from "./pages/Calendar";
import { Provider } from "react-redux";
import store from "./store.js";
import SideNavbar from "./components/navbar-side";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route component={Home} path="/" exact={true}/>
        <SideNavbar/>
        <Main>
          <Route component={Goals} path="/goals" exact={true}/>
          <Route component={Dashboard} path="/dashboard" exact={true}/>
          <Route component={Calendar} path="/calendar" exact={true}/>
        </Main>
      </Router>
    </Provider>
  );
}

export default App;
