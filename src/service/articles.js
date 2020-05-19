import axios from 'axios'

const api = axios.create({
  baseURL: 'https://strangerplants-948c.restdb.io/rest/',
  timeout: 5000,
  headers: { 'x-apikey': '5ec3a273ce64705c9963fcc5' }
})

function getArticles(max = 100) {
  return api
    .get(`articles?max=${max}&sort=publish_date`)
    .then(res => {
      return res.data
    })
    .catch(err => console.error(err))
}

export { getArticles }
