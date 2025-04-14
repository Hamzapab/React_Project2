
import { useState, useRef, useEffect } from "react";
import { Receip } from "./Receip";
import { Ingredient } from "./Ingrediant";
import { getRecipeFromMistral } from "../../ai"


export default function Form(){
    const [inputValue, setInputValue] = useState("");
    let [ingredients,setIngredients]= useState([])


     
    function handleChange(e){
        setInputValue(e.target.value)
    }
    // Old Form Submision ethod
    // function onSubmitHandler(e){
    //     e.preventDefault();
    //     console.log(inputValue.trim())
    //     const ingredientData = new FormData(e.currentTarget)
    //     const newIngredient = ingredientData.get("Ingredients");
    //     if(inputValue.trim()){
    //         setIngredients(prev => [...prev,newIngredient])   
    //         setInputValue("")
    //     }
    // }

    // New Submition Method
    function addIngrident(data){
        if(inputValue.trim()){
            setIngredients(prev => [...prev,data.get("Ingredients")])   
            setInputValue("")
        }
    }

  
    // Show Recipe 
    let [recipe, setReceipe] = useState("")
    async function  handleRecipeShown(){
       const generatedRecipe = await getRecipeFromMistral(ingredients)
       setReceipe(generatedRecipe)
    }
    
      // use Ref () Application
      const recipeSection = useRef(null)
      console.log(recipeSection)
  
      useEffect(()=>{
         if(recipe !== "" && recipeSection){
          recipeSection.current.scrollIntoView({behavior:"smooth"})
         }
      },[recipe])


    const ingredientsList = ingredients.map((item)=>  <li key={item}>{item}</li>);
    return (
      <div className="main">
        <form className="form" action={addIngrident}>
          <input
            className="input"
            type="text"
            placeholder="e.g : Tomato"
            aria-label="add ingredients"
            value={inputValue}
            onChange={handleChange}
            name="Ingredients"
          />
          <button className="btn1">Add Ingredients</button>
        </form>
        {ingredients.length > 0 && (
          <Ingredient 
            ref={recipeSection}
            ingredientsList={ingredientsList}
            ingredients={ingredients} 
            handleRecipeShown={handleRecipeShown} 
          />
        )}
        { recipe && <Receip recipe={recipe} />}
      </div>
    );
}

