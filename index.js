const express = require('express');
const app = express();
const router = require('./router');

app.set('view engine', 'ejs');
app.set('views', './views');














const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});