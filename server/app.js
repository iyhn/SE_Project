const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(3001, () => console.log('App listening on port 3001!'))