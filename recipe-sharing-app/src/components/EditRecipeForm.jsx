import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleChange = (e) => {
    setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Explicitly included here to prevent default form submission
    updateRecipe(recipe.id, updatedRecipe);
    onClose(); // Close the form after submitting
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}> {/* Ensures event is passed */}
      <h2>Edit Recipe</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={updatedRecipe.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={updatedRecipe.description}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
