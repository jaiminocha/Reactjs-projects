import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Inputbar from './Components/Inputbar';
import ClickButton from './Components/ClickButton';
import DataLog from './Components/DataLog';

// Doing the counter with javascript methods
function increaseCount(){
  let count = document.querySelector(".count");
  let currentCount = parseInt(count.innerHTML);
  count.textContent = 1 + currentCount;
}
function decreaseCount(){
  let count = document.querySelector(".count");
  let currentCount = parseInt(count.innerHTML);
  // console.log(currentCount);
  count.textContent = currentCount - 1;
}

function App() {
  const [count, setCount] = useState(0);

  const [fieldData, setFieldData] = useState([]);
  //   // console.log("AppJS ", newData);
  // }

  return (
    <div className="App">
      <Navbar />
      <Banner 
        name="Jai"
        age={22}
      />
      <p>Hello World!</p>
      <p>Counter: <span className="count">0</span></p>
      <button onClick={increaseCount}>Increase +</button>
      <button onClick={decreaseCount}>Decrease -</button>

      <div className="counter">
        <p>Another Counter: <span className='num'>{count}</span></p>
        <button onClick={() => setCount(count + 1)}>Increase +</button>
        <button onClick={() => setCount(count - 1)}>Decrease -</button>
      </div>

      <center>
        <Inputbar setFieldData={setFieldData} />
      </center>

      <ClickButton />
      <DataLog fieldData={fieldData} />
    </div>
  );
}

export default App;
