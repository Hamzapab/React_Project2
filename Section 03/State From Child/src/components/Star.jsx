import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"

export function Star(props){
   return (
     <button
       onClick={props.handleClick}
       aria-pressed={props.isFilled}
       className="favorite-button"
     >
       <img
         src={props.isFilled ? starFilled : starEmpty}
         alt={props.isFilled ? "Filled Start icon" : "empty star icon"}
         className="favorite"
       />
     </button>
   );
}