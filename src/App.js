import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 3);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  };

  const backToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={backToZero}>Back To Zero</button>
      {count}
    </div>
  );
}

export default App;
