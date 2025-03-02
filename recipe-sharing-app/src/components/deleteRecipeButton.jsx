import useRecipeStore from "./components/recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(id)}>Delete</button>;
};

export default DeleteRecipeButton;
