const films = require('../../data/films.json')

function index(req, res) {
  res.render('main/index', {films});
}

module.exports = {
  index
};