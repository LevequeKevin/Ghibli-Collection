const client = require('./db_client');

const dataMapper = {
  getAllMovies: async () => {
    const result = await client.query('SELECT * FROM "movie";');
    return result.rows;
  },
  getOneMovie: async (id) => {
    const query = ('SELECT * FROM "movie" WHERE "id" = $1;');
    const values = [id];
    const result = await client.query(query, values);
    if (result.rowCount === 0){
      return null;
    }
    return result.rows[0];
  }
  // TODO Manage form
}

module.exports = dataMapper;