
exports.up = function (knex) {
  return knex.schema.createTable('nutritional_data', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('serving_size')
    table.integer('energy')
    table.integer('protein')
    table.integer('fat_total')
    table.integer('sat_fat')
    table.integer('carbs')
    table.integer('sugars')
    table.integer('dietary_fiber')
    table.integer('sodium')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('nutritional_data')
}
