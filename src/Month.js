import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Date from './Date'

class Month extends Component {
  daysOfWeek = () => {
    const days = [
                  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                  'Thursday', 'Friday', 'Saturday'
                 ]
    return <Grid.Row columns={7} textAlign='center'>
            {days.map((day, idx) => {
              return <Grid.Column key={idx}>
                <b>{day}</b>
              </Grid.Column>
            })}
          </Grid.Row>
  }

  rows = () => {
    const { days, start } = this.props.month

    const dates = []
    const weeks = Math.ceil(days/7)
    let j = 1
    let i = 0

    while(j <= days){
      while(i <= weeks) {
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
        i++
      }//end while loop
    }

    if(dates[dates.length-1][0] === 0) {
      dates.pop()
    }

    return <>
            {dates.map((dateArr, idx) => {
                return <Grid.Row columns={7} textAlign='center' key={idx}>
                  {dateArr.map((date, idx) => {
                    return <Grid.Column key={idx}>
                      <b>
                        {date === 0 ? <div></div> : <Date date={date} />}
                      </b>
                      </Grid.Column>
                  })}
                </Grid.Row>
              })}
          </>

  }

  render(){
    const { name } = this.props.month

    return <div className="calendar-table">
            <Grid celled>
              <Grid.Row columns={1} textAlign='center'>
                <Grid.Column>
                  <h2>{name} &nbsp; 2019</h2>
                </Grid.Column>
              </Grid.Row >

                {this.daysOfWeek()}
                {this.rows()}

            </Grid>
          </div>
  }
}

export default Month
