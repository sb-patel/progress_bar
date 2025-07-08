import { useState } from 'react'
import './App.css'

const ProgressBar = ({ progress }) => {
  return (
    <div className="outer">
      <div className="inner" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(40)

  return (
    <>
      <h1>Progress Bar</h1>    
      <ProgressBar progress={count} />
    </>
  )
}

export default App
