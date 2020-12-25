import React from "react";
import MeditationServices from "../services/MeditationServices";
import Button from "./button";
import Clock from "./clock";
import Input from "./input";



export default class Meditaion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
      meditation: {
        action: null,
        time_log: null,
        created_timestamp: null,
        end_timestamp:null,
      }
      

    }
  }

 
  componentDidMount(){

    let meditation = {
      action: this.state.meditation.action, 
      created_timestamp: this.state.meditation. created_timestamp,
      time_log: this.state.meditation.time_log, 
      end_timestamp: this.state.meditation.end_timestamp
    }
    MeditationServices.saveMeditation(meditation);
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
   
    const startTimeLog = this.state.count;
    const date = new Date();
    const mySqldateformat = date.toISOString().split('T')[0] + ' '  
    + date.toTimeString().split(' ')[0];

    this.timer = setInterval(() => {
      
      const newCount = this.state.count - 1;
      const timeintoMinutes = (startTimeLog - newCount)/60;

      this.setState(
        {count: newCount >0 ? newCount : 0,
          meditation: {
            action: "start",
            time_log: timeintoMinutes,
            created_timestamp: mySqldateformat,
            end_timestamp:null,
          }

        }
      );
      newCount ===0 && this.handleStop();
    }, 1000);

    this.componentDidMount();
   
  
  }
  
  handleStop() {
    const endTimeLog = this.state.count;
    const date = new Date();
    const mySqldateformat = date.toISOString().split('T')[0] + ' '  
    + date.toTimeString().split(' ')[0];


    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:false,
         meditation:{
          action:"stop",
          time_log: endTimeLog,
          end_timestamp:mySqldateformat,
         }
        }
      );
    }

    this.componentDidMount();
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
    
    const style = {
      
        margin: 0,
        fontSize: '2em'
      
    }
    const {count} = this.state;
    return (
      <div className="meditation-container" style = {style}>
        <h2 className = "meditation-message">Display Welcome Message!</h2>
        <Clock time={count}/>
        <div>
        <Input onSetCountdown={this.handleCountdown.bind(this)}/>
        <Button label="stop" onClickHandler={this.handleStop.bind(this)}/>
        <Button label="reset" onClickHandler={this.handleReset.bind(this)}/>

        </div>
       
      </div>
    )
  }
}



  

