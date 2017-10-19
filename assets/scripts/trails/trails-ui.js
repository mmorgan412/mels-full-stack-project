'use strict'

const showTrailsTemplate = require('../templates/trail-listing.handlebars')

const addTrailSuccess = function () {
  $('#message').show()
  console.log('success!')
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
  $('#trail-list').append(showTrailsHtml)
}

const getTrailsFailure = function () {
  $('#message').show()
  $('#message').text('get trails failed')
}

module.exports = {
  addTrailSuccess,
  addTrailFailure,
  getTrailsSuccess,
  getTrailsFailure
}
