import React, { Component } from "react";
import { months } from "./months.json";
import "./App.css";
import Month from "./Month"
import { Button } from "semantic-ui-react"



class App extends Component {
  state = {
    monthToDisplay: 0
  }

  setDisplayMonth = (e, month) => {
    this.setState({ monthToDisplay: month })
  }

  render() {
    const colors = [
      "olive", "green", "teal", "blue", "violet", "purple",
      "pink", "brown", "red", "orange", "yellow", "olive"
    ]

    const m = this.state.monthToDisplay

    return (
      <div >
        <div className="header"><h1>2019</h1></div>
        <div className="month-buttons">
          {months.map((month, idx) => {
            return <Button
                    key={idx} color={colors[idx]} month={idx}
                    onClick={(e, { month }) => this.setDisplayMonth(e, month)}
                  >
                {month.name}
              </Button>
        })}
        </div>
        <div className="month-display">
          <Month month={months[m]}/>
        </div>
      </div>
    );
  }
}

export default App;
