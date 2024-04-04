const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});
app.use("/api/regusers", require("./routes/registerRoute"));

app.use(errorHandler);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
