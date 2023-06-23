exports.up = knex => knex.schema.createTable("products", table => {
  table.increments("id");
  table.varchar("name").notNullable();
  table.varchar("description").nullable();
  table.integer("price").notNullable();
  table.varchar("category").notNullable();
  table.varchar("image").nullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("products");
