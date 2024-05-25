const pg = require ('pg');
const Client = pg.Client;

// on connecte le client à la base de données
const client = new Client({
  connectionString: process.env.PG_CONNECTION_STRING,
});

// on connecte le client au serveur
client.connect();

// on exporte le clent connecté
module.exports = client;