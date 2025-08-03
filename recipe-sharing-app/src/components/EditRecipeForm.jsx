import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();


  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSave = (updatedRecipe) => {
    useRecipeStore.getState().updateRecipe(updatedRecipe);
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

const EditRecipeFormInner = ({ recipe, onSave }) => {
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({ ...recipe, title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default RecipeDetails;