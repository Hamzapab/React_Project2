// Most way use to implement useState
// import { useState } from "react";
// For Course Reason we will import all React library
import React from "react";


export default function StateIntro(){
    let [isImportant, setIsImportant] = React.useState("Yes");

    function handleClick(){
        setIsImportant("No")
    }
    return (
        <div className="main">
              This to test useState 
            <button onClick={handleClick}>{isImportant}</button>
        </div>
    )
}

