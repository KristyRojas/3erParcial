import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <Router>
      <div>
        <main>
          <Route path="/" exact render={() => <Home title={currentPage} />} />
          <Route path="/about" render={() => <About title={currentPage} />} />
          <Route path="/dashboard" render={() => <Dashboard title={currentPage} />} />
          <Route path="/header" render={() => <Header title={currentPage} />} />
        </main>
      </div>
    </Router>
  );
}

export default App;

