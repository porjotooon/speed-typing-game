import React, { useState } from "react"

function App(){
  const [ text, setText ] = useState("")

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  // function that counts number of words in text

  function wordCount(string){
    return string.split(' ').length
  }

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea onChange={handleChange} value={text}/>
      <h4>Time Remaining: ???</h4>
      <button>Start</button>
      <h1>Word count: {wordCount(text)}</h1>
    </div>
  )
}


export default App