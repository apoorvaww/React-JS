import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// data can be updated through hooks. UI updation is controlled by react
function App() {
  //useState is a hook and it changes your state i.e. the change in UI is propagated through this

  //basically syncing state and ui in counter
  //useState results array with 2 members: counter and a second index has function.

  const [counter, setCounter] = useState(5)


  // let counter = 5
  // we don't need this counter now because the useState will be updating the counter in UI

  const addValue = () => {
    // console.log("Clicked", counter);
    // // counter++;
    if(counter + 1 > 20){
      alert("Limit exceeded");
    }
    else{
      setCounter(counter + 1)
    }

  }

  const decreaseValue = () =>{
    if(counter - 1 < 0){
      alert("Value can't be negative")
    }
    else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
