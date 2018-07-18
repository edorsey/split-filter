const _reduce = require('lodash.reduce')

function splitFilter(array, filterFn) {
  return _reduce(
    array,
    (result, item) => {
      if (filterFn(item)) {
        result[0].push(item)
      } else {
        result[1].push(item)
      }
      return result
    },
    [[], []]
  )
}

module.exports = splitFilter
