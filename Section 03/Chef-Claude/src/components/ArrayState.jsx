import {useState} from "react";


export default function ArrayState(){

    const [myFavoritThings,setMyFavoritThings] = useState([])
    const allFavoritThings = ["Car","Pubg","Vila","Wife","Healthy"]
    

    function addThings(){
        setMyFavoritThings(prev => [...prev,allFavoritThings[prev.length]])
    }
    const things = myFavoritThings.map(thing => <p key={thing}>{thing}</p>)
    return (
        <div className="main arrayState">
            <button onClick={addThings} className="counter">Add item</button>
            <div className="thingsList">
                {things}
            </div>
        </div>
    )
}

