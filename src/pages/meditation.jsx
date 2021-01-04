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
      startCount:0,
      endCount:0,
      time_log: 0,
      created_timestamp: null,
      end_timestamp:null,
      
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

  createDateStamp(){
   
    const date = new Date();
    const mySqldateformat = date.toISOString().split('T')[0] + ' '  
    + date.toTimeString().split(' ')[0];
    return mySqldateformat;
  }


 
  handleStart() {
    
    const mySqldateformat = this.createDateStamp();
   
    const startTimeLog = this.state.count;

    this.timer = setInterval(() => {

      const newCount = this.state.count - 1;
    
      this.setState(
        {count: newCount >=0 ? newCount : 0,
        startCount:startTimeLog,
        endCount:(this.state.count-1),
        time_log: Math.ceil((this.state.startCount - this.state.endCount)/60),
        created_timestamp: mySqldateformat,
        
        }
      );
  
      newCount ===0 && this.handleStop();
      
    }, 1000);
    //console.log("state from starthandler: " , this.state);
    

  
  }
  

 

  handleStop() {
    
    const mySqldateformat = this.createDateStamp();
  
    if(this.timer) {
      clearInterval(this.timer);
     this.setState(
        {running:false,
        end_timestamp: mySqldateformat,
        }
        
      ); 
  
    }
    //console.log("from stop handler: " ,this.state);

    let meditation = {
      created_timestamp: this.state.created_timestamp,
      time_log: this.state.time_log, 
      end_timestamp: mySqldateformat
    }
    //console.log('MEDIATATION PAYLOAD', meditation);
    MeditationServices.saveMeditation(meditation);


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



  

