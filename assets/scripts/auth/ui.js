'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('You have successfully signed up! Log in to Play!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#sign-up-modal').modal('toggle')
}

const signUpFailure = function () {
  $('#sign-in').trigger('reset')
  $('#signup-fail-message').text('Sign up Failed.  Please try again!')
}

const signInSuccess = function (data) {
  $('#message').show()
  $('#message').text('You have successfully signed in as ' + data.user.email)
  store.user = data.user
  $('#sign-out').show()
  $('#change-password-link').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-in-modal').modal('toggle')
  $('#sign-up-link').hide()
  $('#sign-in-link').hide()
}

const signInFailure = function () {
  $('#sign-up').trigger('reset')
  $('#signin-fail-message').text('Sign in Failed. Check your user name and password and try again.')
}

const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('You have successfully changed your password!')
  $('#change-password').trigger('reset')
  $('#change-password-modal').modal('toggle')
}

const changePasswordFailure = function () {
  $('#password-fail-message').show()
  $('#password-fail-message').text('Change Password Failed - Please Try Again!')
}

const signOutSuccess = function () {
  $('#message').show()
  $('#message').text('You have successfully signed out!')
  store.user = null
  logOutDisplay()
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
