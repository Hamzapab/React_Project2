import ReactDOM from "react-dom/client" 
import WindowTracker from "./WindowTracker"
import React, { StrictMode } from "react"
import "./index.css"

export default function App() {

    const [show, setShow] = React.useState(true)
     function handleClick() {
        setShow(prevShow => !prevShow)
     }
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    
    return (
        <main className="container">
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>);