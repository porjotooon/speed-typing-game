import React, { useState, useEffect, useRef } from "react"

function App(){
  const STARTING_TIME = 5
  const [ text, setText ] = useState("")
  const [ timeRemaining, setTimeRemaining ] = useState(STARTING_TIME)
  const [ shouldStart, setShouldStart ] = useState(false)
  const [ wordCount, setWordCount ] = useState(0)
  const textboxRef = useRef(null)

  // handleChange(event) takes in an event
  // and changes the state of text
  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  // wordCount(string) takes in a string 
  // and counts number of words in the string
  function countWords(string){
    const wordArray = string.trim().split(' ')
    return wordArray.filter(word => word !== "").length
  }

  // startGame resets the game
  function startGame() {
    setTimeRemaining(STARTING_TIME)
    setShouldStart(true)
    setText("")
    textboxRef.current.disabled = false
    textboxRef.current.focus()
  }

  // endGame produces word count and stops game
  function endGame() {
    setShouldStart(false)
    setWordCount(countWords(text))
  }

  // useEffect causes the timer to decrement
  // by 1 second till it reaches 0
  useEffect( () => {
    if(timeRemaining > 0 && shouldStart){
      setTimeout( () => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0){
      endGame()
    }
  }, [timeRemaining, shouldStart])

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