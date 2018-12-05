const mongoose = require('mongoose');


const pieSchema = new mongoose.Schema({
  chartType: String,
  question: {type: String, required: true},
  choice1: {
    name: String,
    votes: Number
  },
  choice2: {
    name: String,
    votes: Number
  },
  choice3: {
    name: String,
    votes: Number
  },
  choice4: {
    name: String,
    votes: Number
  },
  category: {type: String, required: true},
});



// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Pie', pieSchema);
