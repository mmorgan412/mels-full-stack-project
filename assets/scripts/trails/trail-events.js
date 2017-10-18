'use strict'

const addTrailDisplay = function () {
  $('#add-trail').show()
  $('#add-trail-button').hide()
}

const viewTrails = function () {
  $('#trail-list').show()
  $('#view-trails').hide()
}

const addTrailSuccess = function () {
  $('#trail-list').show()
}

const addTrailHandlers = function () {
  $('#add-trail-button').on('click', addTrailDisplay)
  $('#add-trail').hide()
  $('#trail-list').hide()
  $('#view-trails').on('click', viewTrails)
  $('#add-new-trail').on('submit', addTrailSuccess)
}

module.exports = {
  addTrailHandlers
}
