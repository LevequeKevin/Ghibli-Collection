const router = require('express').Router();
const mainController = require('./controllers/mainController')
const movieController = require('./controllers/movieController')

router.get("/", mainController.index);
router.get("/movies", movieController.list);
router.get("/movies/:id", movieController.detail);
router.post('/subscribe', mainController.subscribe);

module.exports = router;