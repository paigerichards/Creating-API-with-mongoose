const mongoose = require('mongoose');
require('/init');

const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  yearReleased: Number
})

const Movie = mongoose.Model('Movie', movieSchema)
