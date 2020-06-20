import React from "react"
import useGame from "./useGame"

function App(){
  const {text, 
        timeRemaining, 
        shouldStart, 
        wordCount, 
        textboxRef, 
        handleChange, 
        startGame} = useGame()

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea ref={textboxRef} onChange={handleChange} value={text} disabled={!shouldStart}/>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button style={{cursor: "pointer"}} onClick={startGame} disabled={shouldStart}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}


export default App