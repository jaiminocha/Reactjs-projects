import { useState } from 'react';
import searchImages from './Api';
import './App.css';
import ImageList from './Components/ImageList';
import SearchBar from './Components/SearchBar'

function App() {
  const [data, setData] = useState([]);
  const onSubmit = async(query) => {
    const result = await searchImages(query);
    let arr = [];
    result.forEach(element => {
      arr.push(element.urls.small)
      // console.log(element)
    });
    setData([...arr]);
  }
  return (
    <div>
      <SearchBar 
        onSubmit={onSubmit} 
      />
      <center>  
        {
          data.length ? <h3>Showing {data.length} Images</h3> : <></>
        }
      </center>
      <ImageList data={data} />
    </div>
  );
}

export default App;
