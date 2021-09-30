import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Photography from './components/pages/Photography';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/photography' exact component={Photography}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
