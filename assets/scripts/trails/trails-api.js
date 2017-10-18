'use strict'

const config = require('../config')
const store = require('../store')

const createTrail = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trails',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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
    url: config.apiOrigins + '/trails/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteTrail = function (data) {
  return $.ajax({
    url: config.apiOrigins + '/trails/' + store.game.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// deleteTrail

module.exports = {
  createTrail,
  getTrails,
  updateTrail,
  deleteTrail
}
