import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <nav className="sticky top-0 z-50 bg-white shadow-sm transition-colors duration-300" id="main-nav">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between h-12">
              <Link 
                to="/" 
                className="flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <img 
                  src="/chef-icon.png" 
                  alt="Chef Hat" 
                  className="h-8 w-8 mr-2" 
                />
                RecipeShare
              </Link>
              <div className="flex items-center space-x-8">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  to="/add-recipe" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Add Recipe
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Add scroll event listener for navbar effect */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('scroll', function() {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 10) {
              nav.classList.add('bg-gray-800', 'text-white');
              nav.classList.remove('bg-white');
            } else {
              nav.classList.remove('bg-gray-800', 'text-white');
              nav.classList.add('bg-white');
            }
          });
        `}} />

        <main className="min-h-[calc(100vh-8rem)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} RecipeShare. All rights reserved. Created By Dorwu-Gabriel
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
