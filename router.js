const express = require('express');
const router = express.Router();

router.get("/");
router.get("/films");
router.get("/films/:id")

module.exports = router;