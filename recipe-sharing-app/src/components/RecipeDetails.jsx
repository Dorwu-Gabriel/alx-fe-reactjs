import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  return (
    <div>
      <h2>Recipe Details</h2>
      {recipe ? (
        <>
          <p><strong>{recipe.title}</strong></p>
          <p>{recipe.description}</p>
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton id={recipe.id} />
        </>
      ) : (
        <p style={{ color: 'red' }}>Recipe not found.</p>
      )}
    </div>
  );
};

export default RecipeDetails;