import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className="text-3xl font-bold text-center">Tailwind-React-Integration</h1>
    </div>
    <UserProfile />
    </>
  )
}

export default App
