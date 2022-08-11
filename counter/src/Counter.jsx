import React, { useEffect, useState } from 'react'

const Counter = () => {

const [timer,setTimer] = useState(0)
const [counter,setCounter] = useState(0)


const [control,setControl] = useState(false)

function increment (){
    setControl(false)
  setCounter(counter + 1)
}

function decrement (){
    setCounter(counter - 1)
}

function reset (){
    setTimer(0)
    setCounter(0)
}

useEffect(()=>{
    
    const autoDec = setInterval(()=>{
        if(timer && timer< 1000){
            setControl(true)
            setTimer(timer-1)
        }
        if(!timer){
            setControl(false)
        }

        
    },1000)

    return ()=> clearInterval(autoDec)
},[timer])

  return (
    <div>
      <h1>{counter}-----{timer}</h1>
      <button disabled={control} onClick={increment}>increase</button>
      <button disabled={control} onClick={decrement}>decrease</button>
      <button onClick={reset}>reset</button>
      <input type={'number'} value={control?timer:null} onChange={e=> setTimer(e.target.value)} placeholder='введите'/>
    </div>
  )
}

export default Counter
