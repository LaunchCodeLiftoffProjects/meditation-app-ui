import React from 'react';

const timer=(props)=>{

    return (
            <div>
                <h1> Display Welcome Message </h1>

                <div>
                    <input type = "text" onChange = {props.change} value = {props.current} className = "number" /> 
                </div>

                {/* <div className = "btn-start-pause">
                <span className = "minutes" >minutes</span>
                    <button className = "btn-start" >Start</button>
                    <button className ="btn-pause" >Pause</button>   
                </div>

                <div className = "btn">
                    <button className = "btn-cancel" >Cancel</button>
                </div> */}

            </div>
                );

}

export default timer;