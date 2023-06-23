const sqliteConnections = require("../../database/sqlite");
const knex = require("../../database/knex");

class UserRepository {

  async create({ name, email, password, admin }) {
    const database = await sqliteConnections();

    const userId = await database.run(
      "INSERT INTO users (name, email, password, admin) VALUES (?, ?, ?, ?)",
      [name, email, password, admin]
  );

    return { id: userId};
  }

  async findByEmail(email) {
    const database = await sqliteConnections();
    const user = await database.get("SELECT * FROM users WHERE email = ?", [email]);
    // const user = await knex("users").where({ email === email });

    return user;
  }

  async findAdmin(userId) {
    const user = await knex("users").where({ admin: true }.and({ id: userId }));

    return user;
  }
}


module.exports = UserRepository;