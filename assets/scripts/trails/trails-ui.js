'use strict'

const showTrailsTemplate = require('../templates/trail-listing.handlebars')

const addTrailSuccess = function (data) {
  $('#add-message').show()
  $('#add-message').text('You added a trail!!')
  window.setTimeout(function () {
    $('#add-message').fadeOut()
  }, 3000)
  $('#view-trails').click()
  $('#add-trail-div').hide()
  $('#add-trail-button').show()
  $('#no-trails-message').hide()
}

const addTrailFailure = function () {
  $('#message').show()
  $('#message').text('Add trail failed :(')
}

const getTrailsSuccess = function (data) {
  const showTrailsHtml = showTrailsTemplate({ trails: data.trails })
  $('#trail-list').empty()
  $('#view-trails').hide()
  if (data.trails.length !== 0) {
    $('#trail-list').append(showTrailsHtml)
  } else {
    $('#trail-list').hide()
    $('#no-trails-message').show()
    $('#no-trails-message').text('You don\'t have any trails.  Add a New Trail to get started!')
  }
}

const searchTrailsSuccess = function (data) {
  const showTrailsHtml = showTrailsTemplate({ trails: data.trails })
  $('#trail-list').empty()
  $('#trail-list').show()
  $('#view-trails').show()
  $('#add-trail-div').hide()
  $('#update-trail-div').hide()
  $('#add-trail-button').show()
  if (data.trails.length !== 0) {
    $('#trail-list').append(showTrailsHtml)
  } else {
    $('#trail-list').hide()
    $('#no-trails-message').show()
    $('#no-trails-message').text('You don\'t have any trails with that rating.')
    window.setTimeout(function () {
      $('#no-trails-message').fadeOut()
    }, 3000)
  }
}

const searchTrailsFailure = function () {
  $('#message').show()
  $('#message').text('Sorry there was an issue searching for your trails')
}

const getTrailsFailure = function () {
  $('#message').show()
  $('#message').text('Sorry there was an issue getting your saved trails')
}

const deleteTrailSuccess = function () {
  $('#message').show()
  $('#message').text('Consider it gone!')
  window.setTimeout(function () {
    $('#message').fadeOut()
  }, 3000)
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
  updateTrailFailure,
  searchTrailsSuccess,
  searchTrailsFailure
}
