import pads from "./pads"
import { useState } from "react"
import Pad from "./Pad"

export default function App() {
    const [padsArr, setPadsArr] = useState(pads)

   
    const buttonElements = padsArr.map(e =>(
        <Pad data={e}  key={e.id} />
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}