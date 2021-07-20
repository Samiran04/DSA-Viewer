const express = require("express");
const router = express.Router();

const searching_controller = require("../controllers/searching_controller");

router.post("/linear", searching_controller.linear);
router.post("/binary", searching_controller.binarySearch);

module.exports = router;
