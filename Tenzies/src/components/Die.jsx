import React from "react";


export function Die(props){

    return(
        <button onClick={props.onclick} data-key={props.dataKey} style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}>
            {props.value}
        </button>
    )
}