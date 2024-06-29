import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(10)

// const removeCounter = () => {
//   if (counter > 0) {
//     setCounter (counter - 1)
//   } else {
//     setCounter (counter = 0 )
//   }
// }

//  let counter = 10

  const addValue = () => {
    console.log('Value Added', counter);
    if (counter < 30) {
      counter = counter + 1;
    } else 
    setCounter (counter = 30 );
    setCounter(counter);
  }

  const removeValue = () => {
    console.log('Value Removed', counter);
    if (counter > 0) {
      counter = counter - 1;
    } else 
    setCounter (counter = 0 );
    setCounter(counter);
  }
  
  return (
    <>
      <hr />
      <h1>Project 1 : Count Values</h1>
      <hr />
      <h2>Counter Value: {counter}</h2>
      <hr />
      <button
      onClick={addValue}>Add Value</button>
      <br />
      <hr />
      <button
      onClick={removeValue}>Remove Value</button>
      <hr />
      <p>Real Score Value lie between 0 to 30 :- {counter}</p>
    </>
  )
}

export default App
