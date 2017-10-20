'use strict'

const showTrailsTemplate = require('../templates/trail-listing.handlebars')
// const trailsApi = require('./trails-api')

const addTrailSuccess = function (data) {
  $('#message').show()
  $('#message').text('You added a trail!!!')
}

const addTrailFailure = function () {
  $('#message').show()
  console.log('failure!')
  $('#message').text('Add trail failed :(')
}

const getTrailsSuccess = function (data) {
  const showTrailsHtml = showTrailsTemplate({ trails: data.trails })
  $('#message').show()
  $('#message').text('get trails success')
  // $('#trail-list').empty()
  $('#trail-list').append(showTrailsHtml)
}

const getTrailsFailure = function () {
  $('#message').show()
  $('#message').text('get trails failed')
}

const deleteTrailSuccess = function () {
  $('#message').show()
  $('#message').text('delete trail success')
  // trailsApi.getTrails()
  //   .then(getTrailsSuccess)
}

const deleteTrailFailure = function () {
  $('#message').show()
  $('#message').text('delete trail failed')
}

module.exports = {
  addTrailSuccess,
  addTrailFailure,
  getTrailsSuccess,
  getTrailsFailure,
  deleteTrailSuccess,
  deleteTrailFailure
}
