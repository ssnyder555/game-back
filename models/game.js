const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
  course: String,
  numberOfHoles: Number,
  swings: Number
});



module.exports = mongoose.model('Game', gameSchema);
