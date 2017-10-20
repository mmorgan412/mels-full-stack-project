'use strict'

const config = require('../config')
const store = require('../store')

const createTrail = function (data) {
  console.log('you hit the create Trail API')
  return $.ajax({
    url: config.apiOrigin + '/trails',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getTrails = function () {
  return $.ajax({
    url: config.apiOrigin + '/trails',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTrail = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trails/' + data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteTrail = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/trails/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// deleteTrail

module.exports = {
  createTrail,
  getTrails,
  updateTrail,
  deleteTrail
}
