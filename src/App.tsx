import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <div className='flex items-center justify-center gap-4 my-4'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo w-60 h-60 block" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo w-60 h-60 react" alt="React logo" />
        </a>
      </div>
      <h1 className='my-4 text-4xl font-semibold'>Vite + React</h1>
      <div className="flex flex-col items-center gap-4">
        <button className="btn uppercase bg-slate-100 dark:bg-white/20 text-center py-2.5 px-4 rounded-full" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs my-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
