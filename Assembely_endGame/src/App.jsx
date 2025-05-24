import { useState,useEffect } from 'react'
import Header from './components/Header'
import Lang from './components/Lang'
import Keyboard from './components/Keyboard'
import { getRandomWord } from '../utils'
import clsx from 'clsx'
import './App.css'
import './index.css'

function App(){
  // States Values
  const [currentWord, setWord] = useState(()=>getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [randomLetterHint, setRandomLetterHint] = useState(null);
  const [lostLang,setLostLang]= useState([]);

  // Derived Value from States Value
  const wrongGuessCount = guessedLetters.filter(l=>!currentWord.includes(l)).length;
  const uniqueLetters = Array.from(new Set(currentWord));
  const isWrongGuess = guessedLetters[guessedLetters.length - 1] ? !currentWord.includes(guessedLetters[guessedLetters.length - 1]) : false;
  const correcTGuessCount = guessedLetters.filter(l=>currentWord.includes(l)).length;
  const isWon =  correcTGuessCount == uniqueLetters.length;
  const isLoss = wrongGuessCount >= 8;  

  const isGameOver =  isWon ||  isLoss;
  
       
  function handNewGame(){
    setWord(getRandomWord())
    setGuessedLetters([])
    setLostLang([])
  }
  
   const handleKeyPress = (letter) => {
     if(!guessedLetters.includes(letter)){
        setGuessedLetters(prev=> prev.includes(letter)? prev : [...prev,letter]);
      } 
  };

     useEffect(() => {
     if (currentWord) {
        const index = Math.floor(Math.random() * Array.from(currentWord).length);
      setRandomLetterHint(index);
    }
  }, [currentWord]);

  const spellingLetter = Array.from(currentWord).map((word,index)=>{
    const isGuessed = guessedLetters.includes(word);
    const isHint = Array.from(currentWord)[randomLetterHint] ==  Array.from(currentWord)[index]
    return   <span
        className='letterParent'
        aria-disabled='true'
        aria-hidden="true"
        key={index}
      >
        <span  className={clsx({
          "opacity-0": !isGuessed, 
          "opacity-100": isGuessed || index == randomLetterHint  || isHint, 
        })} 
        aria-disabled='true'
        aria-hidden="true"
        >{word}</span>
      </span>
  })

  return(
    <main>
      <Header  isWon={isWon} isLoss={isLoss} lostLang={lostLang} setLostLang={setLostLang}  wrongGuessCount={wrongGuessCount} isWrongGuess={isWrongGuess}/>
      <Lang wrongGuessCount={wrongGuessCount} />
      <div className="theWord mt-8">
        {spellingLetter}

        {/* SR Only */}
        <div 
        className='absolute left-0 top-0 w-px h-px opacity-0 mt-[-1px]'
        aria-live='polite'  
        role='status'
        >
           {currentWord.split("").map(letter =>guessedLetters.includes(letter) ? letter + " " : 'blank' )}
          </div>
      </div>
      <Keyboard word={currentWord} onKeyPress={handleKeyPress}  guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters}   isGameOver={isGameOver}/>
      {isGameOver && <button  
        className='
        bg-sky-500 px-12 py-1
        hover:bg-blue-600  
        transition-colors 
        duration-300 
        cursor-pointer 
        rounded-sm mt-6'  
        aria-label="New Game"
        onClick={handNewGame}
        >
        New Game
      </button>}
    </main>
  )
}
export default App
  