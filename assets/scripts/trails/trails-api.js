'use strict'

const config = require('../config')
const store = require('../store')

const createTrail = function (data) {
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

const getTrail = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/trails/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTrail = function (data, trailId) {
  return $.ajax({
    url: config.apiOrigin + '/trails/' + trailId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteTrail = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trails/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const searchTrails = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trails?rating=' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTrail,
  getTrails,
  updateTrail,
  deleteTrail,
  getTrail,
  searchTrails
}
