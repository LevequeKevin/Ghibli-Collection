const client = require('./db_client');

const dataMapper = {
  getAllMovies: async () => {
    const result = await client.query('SELECT * FROM "movie";');
    return result.rows;
  }
}

module.exports = dataMapper;