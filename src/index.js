const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config({ path: ".env" });

const app = express();

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);

app.listen(3333);