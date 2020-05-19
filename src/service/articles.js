import axios from 'axios'

const api = axios.create({
  baseURL: 'https://strangerplants-948c.restdb.io/rest/',
  timeout: 5000,
  headers: { 'x-apikey': '5ec3a273ce64705c9963fcc5' }
})

function getArticles() {
  return api
    .get('articles')
    .then(res => {
      return res.data
    })
    .catch(err => console.error(err))
}

export { getArticles }
