const express = require("express");
const router = express.Router();

router.use("/searching", require("./searching"));

module.exports = router;
