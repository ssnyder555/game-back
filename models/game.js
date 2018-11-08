const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
  title: String,
  numberOfHoles: Number,
  swings: Number
});



module.exports = mongoose.model('Game', gameSchema);
