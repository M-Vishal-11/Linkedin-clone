import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
      </div>
        {/* SideBar */}
        {/* Feed */}
        {/* widgets */}

    </div>
  );
}

export default App;
