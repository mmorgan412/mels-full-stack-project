'use strict'

const showTrailsTemplate = require('../templates/trail-listing.handlebars')
// const trailsApi = require('./trails-api')

const addTrailSuccess = function (data) {
  $('#add-message').show()
  $('#add-message').text('You added a trail!!')
  window.setTimeout(function () {
    $('#add-message').fadeOut()
  }, 3000)
  $('#view-trails').click()
  $('#add-trail-div').hide()
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
  window.setTimeout(function () {
    $('#message').fadeOut()
  }, 3000)
  $('#trail-list').empty()
  $('#trail-list').append(showTrailsHtml)
}

const getTrailsFailure = function () {
  $('#message').show()
  $('#message').text('Sorry there was an issue getting your saved trails')
}

const deleteTrailSuccess = function () {
  $('#message').show()
  $('#message').text('Consider it gone!')
}

const deleteTrailFailure = function () {
  $('#message').show()
  $('#message').text('Sorry, there was an issue deleting your trail')
}

const updateTrailSuccess = function () {
  $('#update-message').show()
  $('#update-message').text('Trail Updated')
  window.setTimeout(function () {
    $('#update-message').fadeOut()
  }, 3000)
  $('#view-trails').click()
  $('#update-trail-div').hide()
}

const updateTrailFailure = function () {
  $('#message').show()
  $('#message').text('Sorry, there was an issue updating your trail')
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
