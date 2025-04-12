import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'

 function App(props) {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    React.useEffect(()=>{
      console.log("Effect run!")
      fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
    },[count])
     
    return (
         <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Carachtere</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);