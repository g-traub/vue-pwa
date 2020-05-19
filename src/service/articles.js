import axios from 'axios'

const API_URL = 'data/articles.json'

function getArticles() {
  return axios
    .get(API_URL)
    .then(res => {
      return res.data
    })
    .catch(err => console.error(err))
}

export { getArticles }
