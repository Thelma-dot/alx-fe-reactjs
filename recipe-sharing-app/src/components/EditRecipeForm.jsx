import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
  };


  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Explicitly included here to prevent default form submission
    updateRecipe(recipe.id, updatedRecipe);
    onClose(); // Close the form after submitting
  };

    return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update Recipe</button>
    </form>
  );
};


export default EditRecipeForm;
