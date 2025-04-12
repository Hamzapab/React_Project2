import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'

import Header from "./components/Header"
import Main from "./components/Main"

  function App() {
    
    return (
        <>
          <Header />
          <Main />
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);