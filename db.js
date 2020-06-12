const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getSelections,
  getFave,
  getNut

}

function getUsers (db = connection) {
  return db('Users').select()
}

function getSelections (user_id, db = connection) {

}

function getFave (user_id, db = connection) {
  return db('Users')
    .join('Favourites', 'Favourites.user_id', 'Users.user_id')
    .where('users.id', user_id)
    .first()
}

function getNut (user_id, db = connection) {
  return db('Users')
    .join('nutritional_data', 'nutritional_data.id', 'Users.user_id')
    .where('users.id', user_id)
}
