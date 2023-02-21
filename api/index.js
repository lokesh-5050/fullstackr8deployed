require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
// require("dotenv").config({path: './api/.env'})

app.use(require("cors")({ credentials: true }));

app.get("/api/test", (req, res, next) => {
  res.json(
    `Backend Hitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} ${req.hostname}`
  );
});

console.log(process.env.API_PORT);
if (process.env.API_PORT) {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server Runnning on port ${process.env.API_PORT}`);
  });
}

module.exports = app;
