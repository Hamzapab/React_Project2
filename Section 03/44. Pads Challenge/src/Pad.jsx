import { useState } from "react";
import pads from "./pads";

export default function Pad(props){

    let style={
        backgroundColor:props.data.color
    }
    return(
        <button style={style} className={props.data.on?"on":"off"}></button>
    )
}