const dataMapper = require('../dataMapper');

const movieController = {
  list: async (req, res) => {
    try{
      const movies = await dataMapper.getAllMovies();
      res.render('movie/list', {movies});
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
      res.render('movie/detail', {movie});
    }catch(error){
      console.error(error);
      res.status(500).render('error/500');
    }
  }
};

module.exports = movieController;