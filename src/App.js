import React, { Component } from "react";
import { months } from "./months.json";
import "./App.css";
import Month from "./Month"
import { Button } from "semantic-ui-react"
import { getImage } from './helpers/utils'

class App extends Component {
  state = {
    monthToDisplay: 0
  }

  setDisplayMonth = (e, month) => {
    this.setState({ monthToDisplay: month })
  }

  render() {

    const { monthToDisplay } = this.state

    return (
      <div className="App" style={{
          backgroundImage: `url(${getImage(monthToDisplay)})`
        }}>
        <div className="month-buttons">
          {months.map((month, idx) => {
            return <Button
                    key={idx} color="gray" month={idx}
                    onClick={(e, { month }) => this.setDisplayMonth(e, month)}>
                {month.name}
              </Button>
        })}
        </div>
        <div className="month-display">
          <Month month={months[monthToDisplay]}/>
        </div>
      </div>
    );
  }
}

export default App;
