// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        

        <main>
          <Route path="/" exact component={Home} />
          <Route path="/header" exact component={Header} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
        </main>
      </div>
    </Router>
  );
}

export default App;


