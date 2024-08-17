const express = require("express");
const {jsx, handlebars} = require("./ft.controller.js");
const router = express.Router();

router.get('/jsx', jsx);
router.get('/handlebars', handlebars);

module.exports = router;