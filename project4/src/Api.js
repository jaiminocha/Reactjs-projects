import axios from 'axios'

const searchImages = async(term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
        Authorization: `Client-ID RXMNGzv98JX8ePWk5YDP8gkMI4MjWEDLlkCHYmU8SUw`
    },
    params: {
        query: term,
    }
  })
  return response.data.results;
}

export default searchImages