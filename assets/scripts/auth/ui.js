'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('You have successfully signed up! Log in to Play!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const signUpFailure = function () {
  $('#message').show()
  $('#sign-in').trigger('reset')
  $('#message').text('Sign up Failed')
}

const signInSuccess = function (data) {
  $('#message').show()
  $('#message').text('You have successfully signed in as ' + data.user.email)
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
}

const signInFailure = function () {
  $('#message').show()
  $('#sign-up').trigger('reset')
  $('#message').text('Sign in Failed. Check your user name and password and try again.')
}

const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('You have successfully changed your password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').show()
  $('#message').text('Change Password Failed - Please Try Again!')
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
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#message').hide()
  $('#user-message').hide()
  $('#change-password').trigger('reset')
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
