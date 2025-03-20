// Most way use to implement useState
// import { useState } from "react";
// For Course Reason we will import all React library
import React from "react";


export default function StateCounter(){
    
    let [counter, setCounter] = React.useState(0);


    function handleIncrease(){
        // If you ever need the old value of state
        // it will be good idea to use call back func 
        // insteadet of using state directly 
       setCounter(preCounter => preCounter + 1)
    }
    
    function handleDecrease(){
        setCounter(counter - 1)
    }

    //  Practice Ternary:
    // const isGoing = false;
    // let answer = isGoing ? 'YES' : "NO"

    // Tggle State
    let [isGoing , setIsGoing] = React.useState(false);
    
    function handlToggle(){
        setIsGoing(prev => !prev)
    }

    return (
        <div className="main stateCounter">
            <h2>How many time Bob will say ( State )</h2>
            <button onClick={handlToggle} className="counter">{isGoing ? 'YES' : "NO"}</button>
            <div className="stateBtn">
               <button    onClick={handleIncrease}  id="plus" aria-label="increase counter">+</button>
               <button onClick={handleDecrease} id="minus" aria-label="decrease counter">-</button>
            </div>
        </div>
    )
}

