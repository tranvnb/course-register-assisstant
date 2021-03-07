const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("The course registration assistant api is running");
});

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`);
})
