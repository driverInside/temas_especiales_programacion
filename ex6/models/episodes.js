const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EpisodesSchema = new Schema({
  id: Number,
  name: String,
  air_date: String,
  episode: String,
  characters: [String],
  url: String
}, {
  versionKey: false,
  timestamps: true
});

const EpisodesModel = mongoose.model('Episode', EpisodesSchema, 'Episodes');

module.exports = EpisodesModel;
