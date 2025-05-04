import { useState, useEffect ,useRef} from 'react'
import { nanoid } from 'nanoid'
import { Die } from './components/Die'
import Confetti from 'react-confetti'
import './index.css'


function App() {

  const [dice,setDice] = useState(() => getRandomDiceValue());
  const [timeLeft, setTimeLeft] = useState(3 * 60); 
  const [youLoose,setYouLoose] = useState(false)

  const timerRef = useRef(null);


  let gameStatus;

  let counterStat;

  const winRef = useRef(null);

  if((dice.every(d => d.num === dice[0].num)) && dice.every(d=>d.isHeld)){

    gameStatus = true;
  }
  useEffect(()=>{
    if(gameStatus){
      winRef.current.focus();
    }
  },[gameStatus])
  function getRandomDiceValue(){
     const diceArray = [];
      for(let i = 0;i < 10;i++){
        let ranNum = Math.ceil(Math.random() * 6)
        diceArray.push(
        {
        num:ranNum,
        isHeld:false,
        id:nanoid()
        })
      }
      return diceArray
   }
   function rollDice(){
    if(!gameStatus){
      setDice(pre=>pre.map(obj=>
        obj.isHeld ? obj : {...obj,num:Math.ceil(Math.random() * 6)}
     ))
    }else{
      setDice(getRandomDiceValue())
      setTimeLeft(3*60)
    }
  }
  
  function hold(id) {
    setDice(prev => prev.map(obj =>
      obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj
    ));
  }

  useEffect(() => {
    if(!youLoose && !gameStatus){
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
         
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setDice(getRandomDiceValue)
            setYouLoose(true)
            return 0;
          }
          return prev - 1;
        });
      }, 1000);  
    } 
    return () => clearInterval(timerRef.current);
  }, [youLoose,gameStatus]);


  
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };



  function handleTryAgain(){
    setYouLoose(false)
    setTimeLeft(3*60)
  }


  const dieElem =  dice.map((value)=>
  <Die 
     onclick={()=>hold(value.id)}
     value={value.num} 
     isHeld={value.isHeld} 
     key={value.id}
  />)
  return (
    <>
     <main>
      {youLoose && <div className='loose'>
        You Loose click here to Play again 
        <button onClick={handleTryAgain}>Try again</button>
      </div>}
      <div className='counter'  style={{ color: timeLeft < 60 ? 'red' : 'white' }}>
      {formatTime(timeLeft)}
      </div>
     {gameStatus && <Confetti />}
     <div aria-live='polite' className='sr-only'>
      {gameStatus && <p>Congratulations you won!</p>}
     </div>
     <h1 className="title">Tenzies</h1>
     <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container">
         {dieElem}
        </div>
        <button ref={winRef}  onClick={rollDice} className='roll'>{gameStatus ? 'New game' : "Roll"}</button>
     </main>
    </>
  )
}

export default App
