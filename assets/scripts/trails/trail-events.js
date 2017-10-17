'use strict'

const addTrailSuccess = function () {
  $('#add-trail').show()
  $('#add-trail-button').hide()
  $('#trail-list').show()
}

const viewTrails = function () {
  $('#trail-list').show()
}

const addTrailHandlers = function () {
  $('#add-trail-button').on('click', addTrailSuccess)
  $('#add-trail').hide()
  $('#trail-list').hide()
  $('#view-trails').on('click', viewTrails)
}

module.exports = {
  addTrailHandlers
}
