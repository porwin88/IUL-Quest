import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';


function App () {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div>Here is the app</div>
    </div>
  );
}

export default App;
