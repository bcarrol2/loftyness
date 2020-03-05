import React from 'react';
import Homepage from './components/Homepage';
import Resultspage from './components/Resultspage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/results" component={Resultspage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
