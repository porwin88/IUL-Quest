import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import List from './components/list/List';

export default function App () {

  return (
    <div className="App" data-test="component-app">
      <Header />
      <Hero />
      <List />
    </div>
  );
}

