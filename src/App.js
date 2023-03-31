import React, { Fragment } from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
      </main>
    </Fragment>
  )
}

export default App

