const client = require('./dbClient');

const dataMapper = {
  getAllMovies: async () => {
    const result = await client.query('SELECT * FROM "movie";');
    return result.rows;
  },
  getOneMovie: async (id) => {
    const query = ('SELECT * FROM "movie" WHERE "id" = $1;');
    const values = [id];
    if (!id) {
      return null;
    }
    const result = await client.query(query, values);
    if (result.rowCount === 0){
      return null;
    }
    return result.rows[0];
  },
  registerEmail: async(email) => {
    const checkText = 'SELECT * FROM "user_subscribe" WHERE "email" = $1;';
    const query = 'INSERT INTO "user_subscribe" ("email") VALUES ($1)';
    const value = [email];
    const check = await client.query(checkText, value);
    if(check.rowCount === 0) {
      return await client.query(query, value);
    }
    return null;
  }
};

module.exports = dataMapper;