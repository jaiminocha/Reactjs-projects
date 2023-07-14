import { useState } from "react";

const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === '') {
        window.alert("Cannot be empty");
        return;
    }
    onSubmit(query);
  }
  return (
    <div style={{backgroundColor:'lime', padding:'1rem'}}>
      <center>
        <h2>What do you want to search for today?</h2>
      </center>
        <center style={{margin:'1rem'}}>
            <form onSubmit={handleSubmit}>
                <input 
                    // placeholder="What do you want to search for today?"
                    name='search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{width:'40vw', height:'30px', marginRight: '1rem', fontSize:'20px', borderRadius: '4px', textAlign: 'center'}} 
                    type='text' 
                />
                <button style={{fontSize: '20px', width:'100px', height:'34px', backgroundColor:'cyan', cursor:'pointer', border:'2px solid white',borderRadius: '5px'}}>Search</button>
            </form>
        </center>
    </div>
  )
}

export default SearchBar