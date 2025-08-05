import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <div className="layout">
        <main>
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
