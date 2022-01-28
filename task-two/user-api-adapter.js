import { getUserByName, getUserInfractions } from './user-api.js'

const getUserByNameAdapter = (username) => {
  return new Promise((resolve, reject) => {
    getUserByName(username, resolve, reject)
  })
}

const getUserInfractionsAdapter = (id) => {
  return new Promise((resolve, reject) => {
    getUserInfractions(id, resolve, reject)
  })
}

export default {
  getUserByNameAdapter,
  getUserInfractionsAdapter,
}