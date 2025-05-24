import clsx from "clsx";

export default function Keyboard(props) {


  function clickLetter(e) {
      props.onKeyPress(e.target.value); 
      if(!props.guessedLetters.includes(e.target.value)){
        props.setGuessedLetters(prev=> prev.includes(e.target.value)? prev : [...prev,e.target.value]);
      }
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const letter = alphabet.split("").map((l) => {
      const isClicked = props.guessedLetters.includes(l);
      const isCorrect = props.word.includes(l);

    return <button
      className={clsx({
        'bg-green-500': isClicked && isCorrect,
        'bg-red-500': isClicked && !isCorrect,
        'bg-orange-400': !isClicked,
        'opacity-55 cursor-not-allowed': props.isGameOver
      })}
      disabled={props.isGameOver}
      aria-disabled={props.guessedLetters.includes(l)}
      aria-label={`letter ${l}`}
      onClick={clickLetter}
      value={l}
      key={l}

    >
      {l}
    </button>
  });

  return (
    <div className="keybord  max-w-[400px] mx-auto mt-10 flex flex-wrap justify-center">
      {letter}
    </div>
  );
}
