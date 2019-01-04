import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Month extends Component {
  daysOfWeek = () => {
    const days = [
                  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                  'Thursday', 'Friday', 'Saturday'
                 ]
    return <Grid.Row columns={7} textAlign='center'>
            {days.map(day => {
              return <Grid.Column>
                {day}
              </Grid.Column>
            })}
          </Grid.Row>
  }

  rows = () => {
    const style = {
            height: '80px',
            'vertical-align': 'middle',
            'text-align': 'center',
            'line-height': '80px'
          }
    const textArr = ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text']

    return <Grid.Row columns={7} textAlign='center'>
            {textArr.map(text => {
              return <Grid.Column>
                <div style={style}>{text}</div>
              </Grid.Column>
            })}
          </Grid.Row>
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
