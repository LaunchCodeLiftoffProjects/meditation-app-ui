import React from 'react';
import { Grid, } from '@material-ui/core';
import Button from "./button";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { useForm, Form } from '../components/useForm';
import Controls from "../components/controls/Control";
import { Chart } from 'react-charts';
import {Pie, Doughnut} from 'react-chartjs-2';
import { render } from '@testing-library/react';
//import * as wjChart from '@grapecity/wijmo.react.chart';
//import * as wjChartAnimate from '@grapecity/wijmo.react.chart.animation';
//import {  Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import {getData} from './data';

const sunriseMeditaionUrl = "http://localhost:8080";


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    }, 
  }));

  

  const state = {
    labels: ['Meditated', 'Did not meditate'],
datasets:[
    {
        boredrAlign: 'right',
        borderWidth: 1,
        cutoutPercentage:0 ,
        label:'Previous week Analysis',
        backgroundColor: [
            '#C9DE00',
            '#B21F00'
            
        ],
       
        data:[50,50]
    }
 ]
}

  export default class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }  
      
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
      
            const post = this.state.input;
      
            axios.post(`sunriseMeditaionUrl`, { post })
            .then(res => {
              console.log('res');
              console.log(res);
              console.log(res.data);
      
              let input = {};
              input["goals"] = "";
              this.setState({input:input});
              alert('Post created successfully.');
      
            })
       
        }
      }
      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["goals"]) {
          isValid = false;
          errors["goals"] = "Please enter your goals to update.";
        }
    
         
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    render() {
    return(

        
            <div>
                <h1> User Profile </h1>

                    <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>

    <textarea> Hi </textarea>
    <br></br><br></br>
      <Controls.Input
                name="goals"              
                label="Goals in minutes"  
                value={this.state.input.goals}
              onChange={this.handleChange}            
                              />

<Button label="Update Goals" onClick={this.updateGoals}/>
                              <br>
                            </br>

 <label>
      Member Since:
  </label>
  <br></br>

  < Doughnut

          data={state}
          options={{
            title:{
                display:true,
                text:'previous week',
                fontSize:20
            },
            legend:{
                display:true,
                position:'right'
            }
        }
      }
      />
     
       </Grid>
      </Grid>
      </form>


                </div>
        );
    }
}
  

