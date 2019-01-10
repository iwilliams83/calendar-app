import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class Month extends Component {
  daysOfWeek = () => {
    const days = [
                  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                  'Thursday', 'Friday', 'Saturday'
                 ]
    return <Grid.Row columns={7} textAlign='center'>
            {days.map((day, idx) => {
              return <Grid.Column key={idx}>
                {day}
              </Grid.Column>
            })}
          </Grid.Row>
  }

  rows = () => {
    const { days, start } = this.props.month

    const style = {
            height: '80px',
            'verticalAlign': 'middle',
            'textAlign': 'center',
            'lineHeight': '80px'
          }
    const dates = []

    const weeks = Math.ceil(days/7)
    let j = 1

    while(j <= days){
      for(let i = 0; i < weeks; i++){
        dates.push([])
        if(i === 0){
          for(let s = 0; s < start; s++){
            dates[i].push(0)
          }
          for(let r = start; r < 7; r++){
            dates[i].push(j)
            j++
          }
        }
        else{
          for(let k = 0; k < 7; k++){
            j <= days ? dates[i].push(j) : dates[i].push(0)
            j++
          }
        }
      }
    }
    
    return <>
            {dates.map((dateArr, idx) => {
                return <Grid.Row columns={7} textAlign='center' key={idx}>
                  {dateArr.map((date, idx) => {
                    return <Grid.Column key={idx}>
                          <div style={style}>{date}</div>
                      </Grid.Column>
                  })}
                </Grid.Row>
              })}
          </>

  }

  render(){
    return <div className="calendar-table">
            <Grid celled>
              <Grid.Row columns={1} textAlign='center'>
                <Grid.Column>
                  <h2>JANUARY</h2>
                </Grid.Column>
              </Grid.Row >

                {this.daysOfWeek()}
                {this.rows()}

            </Grid>
          </div>
  }
}

export default Month
