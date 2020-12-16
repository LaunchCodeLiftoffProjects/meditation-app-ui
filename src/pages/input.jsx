import React from 'react';

export default class Input extends React.Component {
  
  onSubmit(event) {
   
    event.preventDefault();
    const strSeconds = this.inputStr.value;
    console.log(strSeconds);
    if(strSeconds.match(/[0-9]/)) {
      this.inputStr.value = '';
      this.props.onSetCountdown(parseInt(strSeconds*60, 10));
    }
  }
  
  render() {
  
    return (
      <form ref="form" onSubmit={this.onSubmit.bind(this)}>
        <input className = "meditation-enterMinutes" type="text"  ref = {input => this.inputStr = input} placeholder="Enter your session in minutes"/>
        <input className = "meditation-btn"  type="submit" value="Start"></input>
      </form>
    )
  }
}