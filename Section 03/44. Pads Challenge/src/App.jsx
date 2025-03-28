import pads from "./pads"
import { useState } from "react"
import Pad from "./Pad"

export default function App() {


    const [padsArr, setPadsArr] = useState(pads)

  
    function setToggle(id){
        console.log("clicked")
        console.log(id)
    }

    console.log(padsArr)

    const buttonElements = padsArr.map(e =>(
        <Pad toggle={setToggle} data={e}  key={e.id} />
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
