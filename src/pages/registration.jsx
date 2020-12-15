import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";

const classes = theme => ({
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
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

export default class Registration extends React.Component {
// export default function Registration() {

  constructor(props){
    super(props);
    this.state = this.initialState;
    this.state.show=false
    this.userChange=this.userChange.bind(this);
    this.submitUser=this.submitUser.bind(this);
  }
  
    initialState = {
      userName:"",emailId:"",password:"",confirmPassword:"",weeklyGoal:""
    }

    resetUser=() => {
      this.setState(() => this.initialState)
    }

    submitUser= event =>{
      event.preventDefault();
      const user = {
            userName:  this.state.userName,
            emailId: this.state.emailId,
            password: this.state.password,
            weeklyGoal: this.state.weeklyGoal
      };      
      axios.post("http://localhost:8080/register",user)
      .then(response => {
      if(response.data!=null){
      this.setState({"show":true});
      setTimeout(() => this.setState({"show":false}),3000);
      }
      else{
      this.setState({"show":false});
      }});
      this.setState(this.initialState);
    }

    userChange =event =>{
      this.setState({
        [event.target.name]:event.target.value
      })
    };

    userList=()=>{
      return this.props.history.push("/list");
      }

    render() {
      //classes = withStyles();
      const {userName,emailId,password,weeklyGoal}=this.state;
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  New User Registration
                </Typography>
                <form className={classes.form} noValidate onReset={this.resetUser} onSubmit={this.submitUser} id="userFormId">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="userName"
                        name="userName"
                        variant="outlined"
                        required
                        fullWidth
                        id="userName"
                        label="User Name"                    
                        autoFocus
                        onChange={this.userChange}
                        value={userName}
                      />
                    </Grid>            
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="emailId"
                        label="Email Address"
                        name="emailId"
                        autoComplete="emailId"
                        onChange={this.userChange} 
                        value={emailId}   
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}               
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.userChange}
                        value={password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        onChange={this.userChange}
                        value={password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="weeklyGoal"
                        label="Goals (Weekly) in minutes"                
                        id="weeklyGoal"
                        autoComplete="weeklyGoal"
                        onChange={this.userChange}
                        value={weeklyGoal}                        
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                </form>
              </div>
            </Container>
          );
    }
}
