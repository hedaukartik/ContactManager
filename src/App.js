import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/Layout/Header";
import About from "./Components/Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import AddContact from "./Components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
