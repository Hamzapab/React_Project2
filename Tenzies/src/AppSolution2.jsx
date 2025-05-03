// import { useState, useEffect } from 'react'
// import { nanoid } from 'nanoid'
// import { Die } from './components/Die'
// import './index.css'


// function AppTwo() {

//   const [dice,setDice] = useState(getRandomDiceValue());
//   const [gameStatus , setGameStatus] =  useState(false);
//   const [buttonLabel, setButtonLabel] = useState("Roll");

//   function getRandomDiceValue(){
//      const diceArray = [];
//       for(let i = 0;i < 10;i++){
//         let ranNum = Math.ceil(Math.random() * 6)
//         diceArray.push(
//         {
//         num:ranNum,
//         isHeld:false,
//         id:nanoid()
//         })
//       }
//       return diceArray
//    }
//    function rollDice(){
//     setDice(pre=>pre.map(obj=>
//        obj.isHeld ? obj : {...obj,num:Math.ceil(Math.random() * 6)}
//     ))
//     if(gameStatus){
//       setButtonLabel('Roll')
//       setDice(getRandomDiceValue())
//       setGameStatus(false)
//     }
//   }
  
//   function hold(id) {
//     setDice(prev => prev.map(obj =>
//       obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj
//     ));
//     const allEqual = dice.every(d => d.num === dice[0].num);
//     setGameStatus(allEqual);
//   }
//   useEffect(()=>{
//     if(gameStatus){
//       setButtonLabel("Reset"); 
//     }else{
//       setButtonLabel("Roll");
//     }
//   },[gameStatus])
//   const dieElem =  dice.map((value)=>
//   <Die 
//      onclick={()=>hold(value.id)}
//      value={value.num} 
//      isHeld={value.isHeld} 
//      key={value.id}
//   />)
//   return (
//     <>
//      <main>
//      <h1 className="title">Tenzies</h1>
//      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
//       {gameStatus && <p className='win'>Congratulation 🎉 You Win!</p>}
//         <div className="die-container">
//          {dieElem}
//         </div>
//         <button onClick={rollDice} className='roll'>{buttonLabel}</button>
//      </main>
//     </>
//   )
// }

// export default AppTwo
