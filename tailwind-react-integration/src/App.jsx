import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'  // Ensure Tailwind is imported
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <UserProfile />
      <div className="flex space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-blue-600 mt-6">Vite + React</h1>
      <div className="card bg-white p-6 shadow-md rounded-lg mt-4">
        <button 
          onClick={() => setCount(count + 1)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
