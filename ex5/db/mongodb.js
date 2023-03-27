const mongoose = require('mongoose');

async function connect(url) {
  await mongoose.connect(url);
}

module.exports = connect;
