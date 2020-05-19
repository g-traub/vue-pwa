import moment from 'moment'

moment.locale('fr')

function formatDate(date) {
  return moment(date).format('LL')
}

export { formatDate }
