const express = require('express');
const routes = require('./routes');
const connection = require('./db/connection');

const app = express();

connection.connect();

app.use(express.json());
app.use(routes);

app.listen(3333);