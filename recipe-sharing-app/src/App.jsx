import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; 
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar /> {/* <-- Add this line */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipe />
                <hr />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;