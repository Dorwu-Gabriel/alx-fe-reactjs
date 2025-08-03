import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSave = (updatedRecipe) => {
    updateRecipe(updatedRecipe); // Update the recipe in the store
    // Optionally, show a success message or navigate away
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <hr />
      <EditRecipeForm recipe={recipe} onSave={handleSave} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;