const dataMapper = require('../dataMapper');

const movieController = {
  list: async (req, res) => {
    try{
      const movies = await dataMapper.getAllMovies();
      res.render('pages/movieList', {movies});
    }catch(error){
      console.error(error);
      res.status(500).render('error/500');
    }
  },
  detail: async (req, res, next) => {
    try{
      const movieId = Number(req.params.id);
      const movie = await dataMapper.getOneMovie(movieId);
      if (!movie) {
        next();
        return;
      }
      res.render('pages/movieDetail', {movie});
    }catch(error){
      console.error(error);
      res.status(500).render('error/500');
    }
  }
};

module.exports = movieController;