  
import React from "react";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1> Welcome to the Sunrise Meditation App </h1>
                    <p> 
                        Meditation works wonder in calming the mind, creating relaxation, promoting better sleep, and encouraging a healthy lifestyle.
                        <br></br>
                        Mediating at the apropriate time is key.
                    </p>
                        <img srcset="https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_960_720.jpg 1x, 
                        https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_1280.jpg 1.333x" 
                        src="https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_960_720.jpg" 
                        alt="Landing Page Image"></img>
            
            </div>
    );
    }
}