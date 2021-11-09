const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001
const routes = require("./Routes");

app.use(bodyParser.json())
app.use(cors());

app.use("/", routes.announcementRoute);

app.get("/", (req, res) => {
  res.status(200).send("Desafio Webmotors");
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})