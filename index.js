require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

app.use(router);

app.use((req, res) => {
  res.status(404).render('error/404');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});