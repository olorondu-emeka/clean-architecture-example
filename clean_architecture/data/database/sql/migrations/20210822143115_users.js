exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary().notNullable();
    t.string('firstName').notNullable();
    t.string('lastName').notNullable();
    t.string('email').notNullable();
    t.string('password').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
