import { useState, useEffect, useRef } from "react"

function useGame(starting_time = 15){
    const [ text, setText ] = useState("")
    const [ timeRemaining, setTimeRemaining ] = useState(starting_time)
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
    setTimeRemaining(starting_time)
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

  return {text, timeRemaining, setTimeRemaining,
    shouldStart, wordCount, textboxRef,
     handleChange, startGame, endGame}
}

export default useGame