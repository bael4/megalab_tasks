import React, {useState } from 'react'

const Counter = () => {

const [counter,setCounter] = useState(0)


function increment (){
  setCounter(counter + 1)
}

function decrement (){
    setCounter(counter - 1)
}

function reset (){
    setCounter(0)
}


  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
