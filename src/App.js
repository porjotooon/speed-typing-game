import React, { useState } from "react"

function App(){
  const [ text, setText ] = useState("")

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  // function that counts number of words in text

  function wordCount(string){
    const wordArray = string.split(' ')
    return wordArray.filter(word => word !== "").length
  }

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea onChange={handleChange} value={text}/>
      <h4>Time Remaining: ???</h4>
      <button onClick={() => wordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}


export default App