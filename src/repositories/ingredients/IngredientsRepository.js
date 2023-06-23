const sqliteConnections = require("../../database/sqlite");

class IngredientsRepository {
  async create({ name, product_id }) {
    const database = await sqliteConnections();
    const ingredient = await database.run(
      "INSERT INTO ingredients (name, product_id) VALUES (?, ?)",
      [name, product_id]
    )

    return ingredient;
  }
  
  async findByName(name) {
    const database = await sqliteConnections();
    const ingredient = await database.get(
      "SELECT * FROM ingredients WHERE name = (?)", [name]
    )

    return ingredient;
  }

  async findAll() {
    const database = await sqliteConnections();
    const ingredients = await database.all("SELECT * FROM ingredients");
  
    return ingredients;
  }
}

module.exports = new IngredientsRepository();