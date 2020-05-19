import moment from 'moment'

moment.locale('fr')

function sortByLatest(articles) {
  articles.sort((article1, article2) => {
    if (
      moment(article2.publish_date, 'DD/MM/YYYY').isAfter(
        moment(article1.publish_date, 'DD/MM/YYYY')
      )
    )
      return 1
    else return -1
  })
}

function formatDate(date) {
  return moment(date, 'DD/MM/YYYY').format('LL')
}

export { sortByLatest, formatDate }
