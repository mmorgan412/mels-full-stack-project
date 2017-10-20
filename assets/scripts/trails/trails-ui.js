'use strict'

const showTrailsTemplate = require('../templates/trail-listing.handlebars')
// const trailsApi = require('./trails-api')

const addTrailSuccess = function (data) {
  $('#message').show()
  $('#message').text('You added a trail!!!')
  $('#view-trails').click()
}

const addTrailFailure = function () {
  $('#message').show()
  console.log('failure!')
  $('#message').text('Add trail failed :(')
}

const getTrailsSuccess = function (data) {
  console.log('get trails success is running')
  const showTrailsHtml = showTrailsTemplate({ trails: data.trails })
  $('#message').show()
  $('#message').text('get trails success')
  $('#trail-list').empty()
  $('#trail-list').append(showTrailsHtml)
}

const getTrailsFailure = function () {
  $('#message').show()
  $('#message').text('get trails failed')
}

const deleteTrailSuccess = function () {
  $('#message').show()
  $('#message').text('delete trail success')
}

const deleteTrailFailure = function () {
  $('#message').show()
  $('#message').text('delete trail failed')
}

const updateTrailSuccess = function () {
  $('#message').show()
  $('#message').text('update trail success!')
  $('#view-trails').click()
}

const updateTrailFailure = function () {
  $('#message').show()
  $('#message').text('update trail failure!')
}

module.exports = {
  addTrailSuccess,
  addTrailFailure,
  getTrailsSuccess,
  getTrailsFailure,
  deleteTrailSuccess,
  deleteTrailFailure,
  updateTrailSuccess,
  updateTrailFailure
}
