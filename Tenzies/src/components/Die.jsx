import React from "react";


export function Die(props){

    const RestpipPositions = {
        6: [5,3,4],
        5: [1,9,3,1],
        4: [1,5,9,2,1],
        3: [1,2,3,4,5,6],
        2: [1,3,4,5,6,7,8],
        1: [1,2,3,4,6,7,8,9],
      };

    const pipPositions = {
        1: [5],
        2: [1, 9],
        3: [1, 5, 9],
        4: [1, 3, 7, 9],
        5: [1, 3, 5, 7, 9],
        6: [1, 3, 4, 6, 7, 9],
      };
   
      const activePositions = pipPositions[props.value];


    return(
        <button 
        onClick={props.onclick} 
        data-key={props.dataKey} 
        aria-label={`Die with vale ${props.value}`}
        aria-pressed={props.isHeld}
        style={{ backgroundColor: props.isHeld ? "#59E391" : "white" 
        }}>
            <div className="pips">
                 {[...Array(9)].map((_, i) => (
                    <div key={i} className="cell">
                        {activePositions.includes(i + 1) && <div className="pipActive"></div>}
                    </div>
                ))}
            </div>
        </button>
    )
}