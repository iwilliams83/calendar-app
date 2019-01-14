import React, { Component } from 'react'

export default class Date extends Component {
  state = {
    input: []
  }

  render(){
    const style = {
            height: '80px'
          }
    const { date } = this.props
    return <div style={style} onClick={this.handleClick}>
            {date}
          </div>
  }
}
