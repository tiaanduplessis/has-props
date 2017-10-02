'use strict'

function hasProps (obj) {
  return Object.getOwnPropertyNames(obj).length !== 0
}

module.exports = hasProps
