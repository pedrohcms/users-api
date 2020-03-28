const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');

require('./database');

app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);