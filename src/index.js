const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { errors } = require("celebrate");

require("./database");

app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
