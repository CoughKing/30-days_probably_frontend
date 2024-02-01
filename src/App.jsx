import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 10
  let [counter, setCounter] = useState(10);

  const addValue=()=>{
    if(counter < 20)
    {
    counter = counter + 1;
    } 
    else
    {
      counter = 20;
    }
    setCounter(counter);
    console.log('Clicked', counter); 
  }
  const removeValue = () => {
    if(counter > 0)
    {
    counter = counter - 1;
    }
    else
    {
      counter = 0;
    }
    setCounter(counter);
    console.log('Clicked', counter);
  } 


  return (
    <>
      <h1>Counter Changer</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      
    </>
  )
}

export default App
