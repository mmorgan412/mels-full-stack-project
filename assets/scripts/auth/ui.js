'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('You have successfully signed up! Log in to Play!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-up-modal').modal('toggle')
  $('.navbar-collapse').collapse('hide')
  $('.alert-danger').hide()
  $('.close-modal').on('click', function () {
    $('.alert-danger').hide()
  })
}

const signUpFailure = function () {
  $('#sign-in').trigger('reset')
  $('#signup-fail-message').text('Sign up Failed.  Please try again!')
  $('.alert-danger').show()
  $('.close-modal').on('click', function () {
    $('.alert-danger').hide()
  })
}

const signInSuccess = function (data) {
  $('#message').show()
  $('#message').text('Hi ' + data.user.email + ', you\'ve successfully logged in!')
  store.user = data.user
  $('#sign-out').show()
  $('#change-password-link').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-in-modal').modal('toggle')
  $('#sign-up-link').hide()
  $('#sign-in-link').hide()
  $('.navbar-collapse').collapse('hide')
  $('.alert-danger').hide()
  $('.close-modal').on('click', function () {
    $('.alert-danger').hide()
  })
  $('#update-trail-div').hide()
}

const signInFailure = function () {
  $('#sign-up').trigger('reset')
  $('#signin-fail-message').text('Sign in Failed. Check your user name and password and try again.')
  $('.alert-danger').show()
  $('.close-modal').on('click', function () {
    $('.alert-danger').hide()
  })
}

const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('You have successfully changed your password!')
  $('#change-password').trigger('reset')
  $('#change-password-modal').modal('toggle')
  $('.navbar-collapse').collapse('hide')
  $('.alert-danger').hide()
  $('.close-modal').on('click', function () {
    $('.alert-danger').hide()
  })
}

const changePasswordFailure = function () {
  $('#password-fail-message').show()
  $('#password-fail-message').text('Change Password Failed - Please Try Again!')
  $('.alert-danger').show()
}

const signOutSuccess = function () {
  $('#message').show()
  $('#message').text('You have successfully signed out!')
  store.user = null
  logOutDisplay()
  $('.alert-danger').hide()
}

const signOutFailure = function () {
  $('#message').show()
  $('#message').text('Sign Out Failed')
}

const createTrailSuccess = function (data) {
  store.trail = data.trail
}

const createTrailFailure = function () {
  $('#message').show()
  $('#message').text('Create Trail Failed')
}

const logOutDisplay = function () {
  $('#sign-up-link').show()
  $('#sign-in-link').show()
  $('#sign-out').hide()
  $('change-password-link').hide()
  $('#message').hide()
  $('#user-message').hide()
  $('#change-password').trigger('reset')
  $('#change-password-link').hide()
  $('.navbar-collapse').collapse('hide')
  $('.alert-danger').hide()
  $('#update-trail-div').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure,
  createTrailSuccess,
  createTrailFailure
}
