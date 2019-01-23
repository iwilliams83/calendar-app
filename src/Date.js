import React, { Component } from 'react'
import InputField from './InputField'

export default class Date extends Component {
  state = {
    input: []
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {input: [...prevState.input, '']}
    })
  }

  updateInput = (string) => {
    this.setState(prevState => {
     let prevInput = [...prevState.input]
     for(let i = 0; i < prevInput.length; i++){
       if(prevInput[i] === ''){
         prevInput[i] = string
         break
       }
     }
     return {input: [...prevInput]}
   })
  }

  render(){
    const dateBlockStyle = { height: '80px' }
    const inputBlockStyle = { height: '50px' }
    const { date } = this.props
    const { input } = this.state
    return <div style={dateBlockStyle}>
              {date}
            <div style={inputBlockStyle}>
              {input.length > 0 && input.map((event, idx) => {
                if(event.length > 0){
                  return <div key={idx}>{event}</div>
                }
                return <InputField key={idx} updateInput={this.updateInput}/>
              })}
            </div>
            <div><a href='#' onClick={this.handleClick}>+</a></div>
          </div>
  }
}
