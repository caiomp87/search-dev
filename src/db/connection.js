const mongoose = require('mongoose');
require('dotenv').config({ path: ".env" });

class Connection {
  connect() {
    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
}

module.exports = new Connection();