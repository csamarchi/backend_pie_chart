const mongoose = require('mongoose');


const pieSchema = new mongoose.Schema({
  question: String,
  choice1: String,
  choice2: String,
});



// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Pie', pieSchema);
