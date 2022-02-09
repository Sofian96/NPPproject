import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import FormIns from './components/FormIns';
import FormCon from './components/FormCon';
import Main from './components/Main';
import Footer from './components/Footer';
import { Component } from 'react/cjs/react.production.min';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

class App extends Component {
  render(){
  return (
    <div className="App">
     
    <Header />
    
    <Routes>
     
      <Route path='/FormCon' element={<FormCon />} />
      <Route path='/FormIns' element={<FormIns />} />
      <Route path='/Main' element={<Main />} />
      <Route exact path='/' element={<FormIns />} />
      <Route exact path='/TinderCards' element={<TinderCards />} />
    
 
    </Routes>

    <Footer />

    </div>
    
    
    );
  }
}

export default App;
