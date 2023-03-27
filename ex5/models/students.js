const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: String,
  lastName: String
}, { versionKey: false });

const studentModel = mongoose.model('Student', studentSchema, 'Students');

module.exports = studentModel;
