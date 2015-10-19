var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  question:{ required: true, type: String},
  option: [
    {
    title: String,
    count: Number,
  }],
  completed: Date,
  // tags: Array
});

mongoose.model('Poll', PollSchema);
