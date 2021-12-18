import React, { useReducer ,useState} from 'react';
import './node-style.css';

function Node(props) {
    return (
      
        <div className ={props.browse=="1"?'node browse popover__wrapper':'node popover__wrapper'}>
            <div className ="node-data" ><p className ="text-center">{props.data}</p></div>
            <div className ="node-next"><p className ="text-center">{props.next}</p></div>
            <div className ="popover__content">
            <p className ="popover__message">
                Address : {props.address} <br></br>
                Data : {props.data}<br></br>
                Next : {props.next}
            </p>
            </div>
        </div>
        
    );
}

export default Node;