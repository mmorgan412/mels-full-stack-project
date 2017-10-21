'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const trailsApi = require('./trails-api')
const trailsUi = require('./trails-ui')
const store = require('./../store.js')

const addTrail = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  trailsApi.createTrail(data)
    .then(trailsUi.addTrailSuccess)
    .catch(trailsUi.addTrailFailure)
  $('#trail-list').show()
  $('#update-trail-div').hide()
}

const addTrailDisplay = function () {
  $('#add-trail-div').show()
  $('#add-trail-button').hide()
}

const viewTrails = function (event) {
  event.preventDefault()
  trailsApi.getTrails()
    .then(trailsUi.getTrailsSuccess)
    .then(deleteTrail)
    .then(editTrail)
    .then(updateTrail)
    .catch(trailsUi.getTrailsFailure)
  $('#trail-list').show()
}

const deleteTrail = () => {
  $('.remove').on('click', function (event) {
    const index = $(event.target).attr('data-id')
    trailsApi.deleteTrail(index)
      .then(trailsUi.deleteTrailSuccess)
      .then(() => {
        $(event.target).parent().parent().hide()
      })
      .catch(trailsUi.deleteTrailFailure)
  })
}

const editTrail = () => {
  $('.edit').on('click', function (event) {
    $('#add-trail-div').hide()
    $('#add-trail-button').show()
    const index = $(event.target).attr('data-id')
    trailsApi.getTrail(index).then(function (data) {
      const mountainName = data.trail.mountain_name
      const trailName = data.trail.trail_name
      const difficulty = data.trail.difficulty
      const rating = data.trail.rating
      const id = data.trail.id
      store.trailId = data.trail.id
      $('data-index').val(id)
      $("input[name='trail[mountain_name]'").val(mountainName)
      $("input[name='trail[trail_name]'").val(trailName)
      $("select[name='trail[difficulty]'").val(difficulty)
      $("select[name='trail[rating]'").val(rating)
      $('#update-trail-div').show()
    })
  })
}

// const editTrail = () => {
//   $('.edit').on('click', function (event) {
//     const index = $(event.target).attr('data-id')

const updateTrail = () => {
  $('#update-trail').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    trailsApi.updateTrail(data, store.trailId)
      .then(trailsUi.updateTrailSuccess)
      .catch(trailsUi.updateTrailFailure)
    $('#trail-list').show()
  })
}

const addTrailHandlers = function () {
  $('#add-trail-button').on('click', addTrailDisplay)
  $('#add-trail-div').hide()
  $('#trail-list').hide()
  $('#view-trails').on('click', viewTrails)
  $('#add-trail').on('submit', addTrail)
  $('#update-trail-div').hide()
  $('#add-trail-button').hide()
  $('#view-trails').hide()
}

module.exports = {
  addTrailHandlers
}
