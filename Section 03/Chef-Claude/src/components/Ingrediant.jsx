export function Ingredient(props){
    return (
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {props.ingredientsList}
        </ul>
        {props.ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3 ref={props.recipeSection}>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.handleRecipeShown}>Get a recipe</button>
          </div>
        )}
      </section>
    );
}