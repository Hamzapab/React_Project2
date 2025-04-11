import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'

 function App(props) {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    /**
     * Challenge:
     * Instead of console logging the data, save it in state
     * and display it to the page. (Just replace the hard-coded
     * object inside the `<pre>` element with the data)
     */
    // Issue Here , that when fetch respons come it will called state function (setStarWarData) and that will 
    // Rerender the app , than it will fetch data again and stuck in this loop. 
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
    console.log("Rendered!")
    //  solution useEffect
    React.useEffect(function(){
      console.log("Effect run!")
      fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
    },[count])
     
    return (
         <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);