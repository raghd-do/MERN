// import React from 'react';
import '../App.css';



const BoxDisplay = (props) => {

    return (
        <div className="d-grid gap-5">
            {
                props.list.map((obj, i) => 
                    <div className="card" key={ i } style={{backgroundColor: obj.color, width: `${obj.size}px`, height: `${obj.size}px`}}></div>
                )
            }
        </div>
    );
};
    
export default BoxDisplay;

