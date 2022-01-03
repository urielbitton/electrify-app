import axios from 'axios'

export const getUnsplashImages = (query) => {
  const options = {
    method: 'GET',
    url: 'https://api.unsplash.com/search/photos/',
    params: {
      page: 1, 
      per_page: 1,
      query,
      client_id: '' //insert unsplash env var key here
    }
  }
  return axios.request(options)
}