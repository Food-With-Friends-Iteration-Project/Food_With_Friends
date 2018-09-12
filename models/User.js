const db = require('../dbConfig');

module.exports = {

  findAllUsers: () => {
    return db.any(`
      SELECT * FROM "users"`);
  },

  createUser: (user) => {
    console.log('creating user in Model', user);
    return db.one(`
    INSERT INTO "users" (email, password)
    VALUES ($/email/, $/password_digest/)
    RETURNING *`,user)
  },

  findByEmail: (email) => {
    console.log('finding by email', email);
    return db.one(`
    SELECT *
    FROM "users"
    WHERE email = $1`, email)
  },

  deleteUsers: () => {
    return db.query(`
    DELETE FROM users;
    `)
  }

}
