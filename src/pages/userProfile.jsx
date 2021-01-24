import React from "react";
import axios from "axios";
import AuthenticationService from "../services/AuthenticationService.js";

export default class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId : 0,
		    userName : null,
	    	emailId : null,
		    weeklyGoal : 0,
		    totalGoalAchieved : 0,
		    memberSince : null
        }
    }

    componentDidMount() {
    
        const loggedInUserId = AuthenticationService.getLoggedInUserId();
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const jwtToken = AuthenticationService.getJwtTokenFromSession();

        console.log("isUserLoggedIn ? ", isUserLoggedIn);
        console.log("jwtToken : ", jwtToken);

        AuthenticationService.setupAxiosInterceptors(AuthenticationService.createJWTToken(jwtToken));

        axios.get(`http://localhost:8080/userProfile/${loggedInUserId}`)
            .then(response => {
                console.log("response data : ", response.data);
                this.setState({
                userId: response.data.userId,
                userName : response.data.userName,
                emailId : response.data.emailId,
                weeklyGoal : response.data.weeklyGoal,
                totalGoalAchieved : response.data.totalGoalAchieved,
                memberSince: response.data.memberSince
            })});
    }
    
    render() {
        return (
            <div>
                <h1> User Profile </h1>
            </div>
    );
    }
}
