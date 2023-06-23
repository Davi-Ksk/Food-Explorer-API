const sqliteConnections = require("../../database/sqlite");

class ProductsRepository {
  async create({ name, description, price, category, image }) {
    const database = await sqliteConnections();

    const productId = await database.run(
      "INSERT INTO products (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)",
      [name, description, price, category, image]
    );

    return { id: productId };
  }

  async update({ id, name, description, price, category, image }) {
    const database = await sqliteConnections();

    const productUpdated = await database.run(
      `UPDATE products SET 
        name = ?, 
        description = ?, 
        price = ?, 
        category = ?, 
        image = ? 
        WHERE id = ?`,
      [name, description, price, category, image, id]
    )

    return productUpdated;
  }

  async findByDescription(description) {
    const database = await sqliteConnections();
    const product = await database.get(
      "SELECT * FROM products WHERE description = (?)", [description]
    )

    return product;
  }

}

module.exports = ProductsRepository;
