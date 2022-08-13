import React,{useState,useEffect} from "react"



const Counter = () => {

  const [counter,setCounter] = useState(0)
  
  
  const [isDisableBtns,setIsDisableBtns] = useState(false)
  
  function increment (){
      setCounter(counter + 1)
  }
  
  function decrement (){
      setCounter(counter - 1)
  }
  
  function reset (){
      setCounter(0)
  }
  
  useEffect(()=>{
      let autoDec = null
      if(!counter){
        setIsDisableBtns(false)
      }
      if(isDisableBtns){
      autoDec = setInterval(()=>{
          if(counter && counter< 1000){
              setCounter(counter-1)
          }
      },1000)
    }
    return ()=> clearInterval(autoDec)
  },  [counter])
  
    return (
      <div>
        <h1>{counter}</h1>
        <button disabled={isDisableBtns} onClick={increment}>increase</button>
        <button disabled={isDisableBtns} onClick={decrement}>decrease</button>
        <button onClick={reset}>reset</button>
        <input type={'number'} value={counter}
        onChange={e=> {
          setCounter(+e.target.value > 1000 ? counter : e.target.value)
          setIsDisableBtns(true)
        }} placeholder='ââåäèòå'/>
      </div>
    )
  }

  export default Counter