exports.up = function (knex) {
  return knex.schema.createTable("incidents", function (table) {
    //primary key auto incremental
    table.increments();
    //campos
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("value").notNullable();
    //chave estrangeira
    table.string("ong_id").notNullable();
    table.foreign("ong_id").references("id").inTable("ongs");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("incidents");
};
