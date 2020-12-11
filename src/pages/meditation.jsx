import React from "react";
import Button from "./button";
import Clock from "./clock";
import Input from "./input";


export default class Meditaion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.state.running !== prevState.running){
      switch(this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }
  
  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        {count: newCount >= 0 ? newCount : 0}
      );
    }, 1000);
  }
  
  handleStop() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:false}
      );
    }
  }
  
  handleReset() {
    this.setState(
      {count: 0}
    );
  }
  
  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true
    })
  }
  
  render() {
    const {count} = this.state;
    return (
      <div className="container">
        <h2 className = "message">Display Welcome Message!</h2>
        <Clock time={count}/>
        <div className = "btn-wrapper">
        <Input onSetCountdown={this.handleCountdown.bind(this)}/>
        <Button label="stop" onClickHandler={this.handleStop.bind(this)}/>
        <Button label="reset" onClickHandler={this.handleReset.bind(this)}/>

        </div>
       
      </div>
    )
  }
}



  

