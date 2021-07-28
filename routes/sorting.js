const express = require("express");
const router = express.Router();

const sorting_controller_api = require("../controllers/sorting_controller");

router.post("/bubble-sort", sorting_controller_api.bubbleSort);

module.exports = router;
