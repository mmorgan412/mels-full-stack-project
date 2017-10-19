'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const trailsApi = require('./trails-api')
const trailsUi = require('./trails-ui')

const addTrailSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data is', data)
  trailsApi.createTrail(data)
    .then(trailsUi.addTrailSuccess)
    .catch(trailsUi.addTrailFailure)
  $('#trail-list').show()
}

const addTrailDisplay = function () {
  $('#add-trail-div').show()
  $('#add-trail-button').hide()
}

const viewTrails = function (data) {
  event.preventDefault()
  trailsApi.getTrails()
    .then(trailsUi.getTrailsSuccess)
    .catch(trailsUi.getTrailsFailure)
  $('#trail-list').show()
  $('#view-trails').hide()
}

const addTrailHandlers = function () {
  $('#add-trail-button').on('click', addTrailDisplay)
  $('#add-trail-div').hide()
  $('#trail-list').hide()
  $('#view-trails').on('click', viewTrails)
  $('#add-trail').on('submit', addTrailSuccess)
}

module.exports = {
  addTrailHandlers
}
