const mongoose = require('mongoose');

const mongoDBConnect = async function (url) {
  return mongoose.connect(url);
}

module.exports = mongoDBConnect;
