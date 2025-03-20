import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState([])
 
  function notification(){
    if(message.length == 0){
      return 'You are all cought Up'
    }else if(message.length == 1){
      return `You Have 1 undread message`
    }else{
      return `You Have ${message.length} unread messages`
    }
  }

  return (
    <>
      <div>
        <h1>{notification()}</h1>
      </div>
    </>
  )
}

export default App
