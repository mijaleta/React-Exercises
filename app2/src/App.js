
import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <h1>react js exercises</h1>
<MyButton/>
      <MyComponent/>
    </div>
  );
}
function MyButton() {
  return <Button  className="buttonColor" variant="info">Click me!</Button>;
}
function MyComponent(){
  // for storing state of my app 
  const [count, setCount] = useState(0)
function increment(){
  setCount(count+1)
}

function decrement(){
  setCount(count-1)
}

  return (
    <>
    <div>
    <h1>simple count method using increment and decrement method</h1>
    <button onClick={increment}>add</button>
    <p>you clicked {count} times</p>
    <button onClick={decrement}>subtract </button>
   </div>
    
    </>
  )
}


export default App;
