import React from 'react';

export default class Clock extends React.Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return  minutes + ':' + seconds;
  }
  render () {
    const {time} = this.props;
    return (
      <div className="timeContainer">
        <h1 className = "minutes"><span className ="displayTime">{this.format(time)}</span> minutes </h1>
      </div>
    )
  }
}