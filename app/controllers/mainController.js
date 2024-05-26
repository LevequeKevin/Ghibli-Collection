const dataMapper = require("../dataMapper");
const client = require("../db_client");

const mainController = {
  index: async (req, res) => {
    try{
      res.render('main/index');
    }catch(error){
      console.error(error);
      res.status(404).render('error/404');
    }
  },
  subscribe: async (req, res) => {
    try{
      const info = req.body;
      const registerEmail = await dataMapper.registerEmail(info.email);
      res.send('<script>window.parent.showMessage();</script>');
    }catch(error){
      console.error(error);
      res.status(404).render('error/404');
    }
  }
}

module.exports = mainController;