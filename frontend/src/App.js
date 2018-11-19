import React, {Component} from 'react';
import Navbar from './components/navbar';
import Pokemon from './components/pokemon';


import './App.css';

class App extends Component {

  render() {
    return ( 
      <div>
        <Navbar />
        <Pokemon />
       </div>
    );
  }
}

export default App;