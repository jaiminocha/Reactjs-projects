import './App.css';
import axios from 'axios';
import React from "react";
import Navbar from './Components/Navbar';
import Card from './Components/Card';

function App() {
  const url = 'https://dummyjson.com/quotes';
  const [data, setData] = React.useState([]);
  React.useEffect( () => {
    axios.get(`${url}`).then((response) => {
      setData(response.data.quotes);
      // console.log(response);
    })
  }, [])
  return (
    <div className="App">
      <Navbar />
      <h1>Quotes of the day!</h1>
      <div className='cards'>
        {
          data?.map((item, index) => {
            return (
              <Card 
                key={index}
                quote={item.quote}
                author={item.author}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
