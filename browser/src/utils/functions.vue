import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY')
    }
  }

Vue.add14days(date) {
    return filter(new Date(new Date(date).getTime() + 1000*60*60*24*14)
  }