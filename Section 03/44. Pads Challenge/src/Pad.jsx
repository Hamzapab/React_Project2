import { useState } from "react";
import pads from "./pads";

export default function Pad(props){
    let [padState, setPadState] = useState(props.data.on)

    function handleClick(){
        setPadState(function(prev){
            return !prev
        })
    }

    let style={
        backgroundColor:props.data.color
    }
    return(
        <button onClick={props.toggle} style={style} className={padState?"on":"off"}></button>
    )
}