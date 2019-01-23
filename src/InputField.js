import React, { Component } from 'react'

export default class InputField extends Component {
  state = {
    newEvent: ''
  }

  handleChange = (e) => {
    this.setState({ newEvent: e.target.value })
  }

  handleKeyDown = (e) => {
    if(e.keyCode === 13){
      this.props.updateInput(this.state.newEvent)
    }
  }

  render(){
    return <input
            value={this.state.newEvent}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
  }
}
