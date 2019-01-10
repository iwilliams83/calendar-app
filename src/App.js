import React, { Component } from 'react';
import { months } from './months.json';
import './App.css';
import Month from './Month'



class App extends Component {
  render() {

    return (
      <div >
        <Month month={months[0]}/>
      </div>
    );
  }
}

export default App;
