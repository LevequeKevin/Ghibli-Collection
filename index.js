require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./app/router');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

app.use(router)












const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});