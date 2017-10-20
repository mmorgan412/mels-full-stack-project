'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const trailsApi = require('./trails-api')
const trailsUi = require('./trails-ui')

const addTrail = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
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
    .then(deleteTrail)
    .then(updateTrail)
    .catch(trailsUi.getTrailsFailure)
  $('#trail-list').show()
  $('#view-trails').hide()
}

const deleteTrail = () => {
  $('.remove').on('click', function (event) {
    const index = $(event.target).attr('data-id')
    trailsApi.deleteTrail(index)
      .then(trailsUi.deleteTrailSuccess())
      .catch(trailsUi.deleteTrailFailure)
  })
}

const updateTrail = () => {
  $('.edit').on('click', function (event) {
    const index = $(event.target).attr('data-id')
    console.log(index)
    // trailsApi.deleteTrail(index)
    //   .then(trailsUi.deleteTrailSuccess)
    //   .catch(trailsUi.deleteTrailFailure)
  })
}

const addTrailHandlers = function () {
  $('#add-trail-button').on('click', addTrailDisplay)
  $('#add-trail-div').hide()
  $('#trail-list').hide()
  $('#view-trails').on('click', viewTrails)
  $('#add-trail').on('submit', addTrail)
}

module.exports = {
  addTrailHandlers
}
