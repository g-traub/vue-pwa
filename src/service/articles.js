import axios from 'axios'

const api = axios.create({
  baseURL: 'https://strangerplants-948c.restdb.io/rest/',
  headers: { 'x-apikey': '5ec3a273ce64705c9963fcc5' }
})

function getArticles(max = 100) {
  return api
    .get(`articles?max=${max}&sort=publish_date&dir=-1`)
    .then(res => {
      return res.data
    })
    .catch(err => console.error(err))
}

function getArticle(id) {
  return api
    .get(`articles/${id}`)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => console.error(err))
}

function favoriteArticle(id, favoriteValue) {
  return api
    .put(`articles/${id}`, { favorite: favoriteValue })
    .then(res => res.data)
    .catch(err => console.error(err))
}

export { getArticles, getArticle, favoriteArticle }
