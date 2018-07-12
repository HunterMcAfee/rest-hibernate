import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Stores from './components/Stores';
import Customers from './components/Customers';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route to="/" component={NavBar} />
          <div className="container-fluid">
            <Route exact path="/stores" component={Stores} />
            <Route exact path="/customers" component={Customers} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
