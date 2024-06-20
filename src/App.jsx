// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

const App = () => {
  const [page, setPage] = useState('home');

  const handleChangePage = (pageName) => {
    setPage(pageName);
  }

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="App">
      <Header onChangePage={handleChangePage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;

