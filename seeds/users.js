
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { user_id: 1, username: 'Jake', favourites: '' },
        { user_id: 2, username: 'Isaac', favourites: '' },
        { user_id: 3, username: 'Johnny', favourites: '' },
        { user_id: 4, username: 'Kim', favourites: '' }
      ])
    })
}