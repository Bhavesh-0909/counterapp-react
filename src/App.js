import './App.css';
import { useState } from 'react';

function App() {
  let [value, setValue] = useState(0);
  function increment(){
    value += 1;
    console.log(value);
    setValue(value);
  }
  function decrement(){
    value -= 1;
    console.log(value);
    setValue(value);
  }
  return(
    <>
    <div>
      <h1 className='h1'>Counter App</h1>
      <div className="App">
        <div onClick={increment}>+</div>
        <div>{value}</div>
        <div onClick={decrement}>-</div>        
      </div>
    </div>
    
  </>
  )
}
 

export default App;
