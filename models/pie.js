const mongoose = require('mongoose');


const pieSchema = new mongoose.Schema({
  question: {type: String, required: true},
  choice1: {type: String, required: true},
  choice2: {type: String, required: true},
  choice3: String,
  choice4: String,
  category: {type: String, required: true},
});



// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Pie', pieSchema);
