import {useEffect} from "react";
import {languages} from "../../languages.js"
import {getFarewellText} from "../../utils.js"

export default function Header({isWon,isLoss,wrongGuessCount,isWrongGuess,lostLang,setLostLang}){
    
    useEffect(() => {
        if(wrongGuessCount > 0){
            setLostLang(prev => [...prev, languages[wrongGuessCount - 1].name]);
        }
    }, [wrongGuessCount]); 

    const encourage = wrongGuessCount <= 0 ? "Let's Save the Programming World" : "Great Job! Save the remaining"
    const FareWallmessage = (wrongGuessCount > 0 &&  isWrongGuess) ? getFarewellText(lostLang) : encourage;


    return(
        <div className="header">
            <h1 className="font-bold mb-2 text-[20px]">Assembly Endgame</h1>
            <p className="text-gray-400">
               Guess the word in under 8 attempts to keep the 
               <br></br> 
               programming word safe from Assembly
            </p>
            <div aria-live="polite" role="status" className="h-[80px] mt-3.5">
            {/* in Game Status */}
            {(!isLoss && !isWon ) && <div className="gameStatus h-[72px]  max-w-[400px] flex flex-col justify-center items-center bg-purple-500 p-3 mx-auto rounded-sm">
                   {FareWallmessage}
            </div> }
            {/* Win Status */}
            {isWon && <div className="gameStatus  max-w-[400px] flex flex-col justify-center items-center bg-green-400 p-3 mx-auto rounded-sm">
               You Won <br></br>
               🎉 Nice Vicotry 🎉
            </div> }
            {/* Loose Status */}
            {isLoss && <div className="gameStatus  max-w-[400px] flex flex-col justify-center items-center bg-red-500 p-3 mx-auto rounded-sm">
               Game over <br></br>
               You Loose, better Start Learning Assembly 🤣 
            </div> }
            
            </div>
        </div>
    )
}