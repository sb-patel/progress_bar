import { useState } from 'react'
import './App.css'

const ProgressBar = ({ progress }) => {
  return (
    <div className="outer">
      <div 
        className="inner" 
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <h1>Progress Bar</h1>    
      <ProgressBar progress={count} />
      <button onClick={() => setCount(count + 5)} className='button-style'>Increase</button>
      <button onClick={() => setCount(count - 5)} className='button-style'>Decrease</button>
    </>
  )
}

export default App
