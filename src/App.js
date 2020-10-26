import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={UserProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
