import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Stores from './components/Stores';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route to="/" component={NavBar} />
          <Route exact path="/stores" component={Stores} />
        </div>
      </Router>
    );
  }
}

export default App;
