const dataMapper = require('../dataMapper');

const movieController = {
  list: async (req, res) => {
    try{
      const movies = await dataMapper.getAllMovies();
      res.render('movie/list', {movies})
    }catch(error){
      console.error(error);
      res.status(500).render('error/500'); 
    }
  }
}

module.exports = movieController;