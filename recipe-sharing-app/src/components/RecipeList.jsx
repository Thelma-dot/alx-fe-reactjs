const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
