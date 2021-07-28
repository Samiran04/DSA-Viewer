const express = require("express");
const router = express.Router();

router.use("/searching", require("./searching"));
router.use("/sorting", require("./sorting"));

module.exports = router;
