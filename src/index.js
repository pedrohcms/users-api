const express = require('express');
const v1Routes = require('./routes');

require('./database');

app = express();

app.use(express.json());
app.use('/api/v1', v1Routes);

app.listen(3333);