import React from "react";
import "./index.css";
import ClassComponent from "./pages/ClassComponent";
import Counter from "./pages/Counter";
import ReviewFunction from "./pages/ReviewFunction";
import FunctionComponent from "./pages/FunctionComponent";
import Todolist from "./pages/Todolist";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from "./component/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/class">
          <ClassComponent />
        </Route>
        <Route path="/function">
          <FunctionComponent />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/reviewfunction">
          <ReviewFunction />
        </Route>
        <Route path="/todolist">
          <Todolist />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
