import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/addRecipe';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipe />
              <hr />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;