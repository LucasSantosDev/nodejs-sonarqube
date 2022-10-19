const express = require("express");
const app = express(); // NOSONAR
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).json({
    name: "Lucas Dev",
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = server;
