import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount((currentCount) => currentCount + 1)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <>
    <h1>
      {advice}
    </h1>
    <button onClick={getAdvice}>GET QUOTE</button>
    <Message count={count}/>
    </>
  )
}

function Message (props) {
  return(
    <h2>
      You have checked: {props.messageCount}
    </h2>
  )
}

export default App
