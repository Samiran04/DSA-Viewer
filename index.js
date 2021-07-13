const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error during running server", err);
    return;
  }
});
