import React, { Component } from 'react'

export default class Date extends Component {
  state = {
    input: '',
    newEvent: false
  }

  handleClick = () => {
    this.setState({ newEvent: true })
  }

  changeHandler = (e) => {
    this.setState({ input: e.target.value})
  }

  renderInputField = () => {
    return <input
              value={this.state.input}
              onChange={this.changeHandler}
            />

  }

  render(){
    const style = {
            height: '80px'
          }
    const { date } = this.props
    return <div style={style} onClick={this.handleClick}>
              {date}
            <div>
              {this.state.newEvent && this.renderInputField()}
            </div>
          </div>
  }
}
