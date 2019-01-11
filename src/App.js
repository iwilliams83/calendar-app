import React, { Component } from 'react';
import { months } from './months.json';
import './App.css';
import Month from './Month'
import { Button } from 'semantic-ui-react'



class App extends Component {
  render() {
    const colors = [
      'olive', 'green', 'teal', 'blue', 'violet', 'purple',
      'pink', 'brown', 'red', 'orange', 'yellow', 'olive'
    ]
    return (
      <div >
        <div className='month-buttons'>
          {months.map((month, idx) => {
            return <Button key={idx} color={colors[idx]}>
                {month.name}
              </Button>
        })}
        </div>
        <div>
          <Month month={months[5]}/>
        </div>
      </div>
    );
  }
}

export default App;
