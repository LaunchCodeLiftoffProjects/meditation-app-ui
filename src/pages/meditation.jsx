import React from 'react';

export default class Meditaion extends React.Component {
    render() {
        const start = document.querySelector('.btn-start');
        const pasue = document.querySelector('.btn-pasue');
        const cancle = document.querySelector('.btn-cancle');

        return (
            <div>
                <h1> Display Welcome Message </h1>

                <div>
                    <p className = "minutes"><span className = "number">20</span>minutes</p>
                </div>

                <div className = "btn-start-pause">
                    <button className = "btn-start">Start</button>
                    <button className ="btn-pause">Pause</button>   
                </div>

                <div className = "btn">
                    <button className = "btn-cancle">Cancle</button>
                </div>


            </div>
    );
    }
}
