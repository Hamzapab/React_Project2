import pads from "./pads"
import { useState } from "react"
import Pad from "./Pad"

export default function App() {



  
    function setToggle(id){
        console.log("clicked")
        console.log(id)
        setPadsArr(prevPads => {
            return prevPads.map(pad => {
                return pad.id === id ? {...pad, on: !pad.on} : pad
            })
        })
    }

    console.log(padsArr)

    const buttonElements = padsArr.map(e =>(
        <Pad toggle={setToggle} id={e.id} data={e} on={e.on} key={e.id} />
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
