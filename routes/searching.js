const express = require("express");
const router = express.Router();

const searching_controller = require("../controllers/searching_controller");

router.post("/linear", searching_controller.linear);

module.exports = router;
