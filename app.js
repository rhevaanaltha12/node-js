const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const port = 3015;
const Route = require("./routes");

// app.use(bodyParser);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", Route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
