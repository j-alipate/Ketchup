
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { user_id: 1, username: 'Jake', favourites: [] },
        { user_id: 1, username: 'Isaac', favourites: [] },
        { user_id: 1, username: 'Johnny', favourites: [] },
        { user_id: 1, username: 'Kim', favourites: [] }
      ])
    })
}