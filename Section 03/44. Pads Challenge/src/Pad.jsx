import { useState } from "react";
import pads from "./pads";

export default function Pad(props){

    function handleClick(){
        setPadState(function(prev){
            return !prev
        })
    }

    let style={
        backgroundColor:props.data.color
    }
    return(
        <button onClick={()=> props.toggle(props.id)} style={style} className={props.on?"on":"off"}></button>
    )
}