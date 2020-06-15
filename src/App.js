import React, { useState, useEffect } from "react"

function App(){
  const [ text, setText ] = useState("")
  const [ timeRemaining, setTimeRemaining ] = useState(15)

  // handleChange(event) takes in an event
  // and changes the state of text
  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  // wordCount(string) takes in a string 
  // and counts number of words in the string
  function wordCount(string){
    const wordArray = string.trim().split(' ')
    return wordArray.filter(word => word !== "").length
  }

  // useEffect causes the timer to decrement
  // by 1 second till it reaches 0
  useEffect( () => {
    if(timeRemaining > 0){
      setTimeout( () => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
  }, [timeRemaining])

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea onChange={handleChange} value={text}/>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => wordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}


export default App