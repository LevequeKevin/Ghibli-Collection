const client = require('./db_client');

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
    const query = 'INSERT INTO "user_subscribe" ("email") VALUES ($1)';
    const value = [email];
    const result = await client.query(query, value);
    return result;
  }
};

module.exports = dataMapper;