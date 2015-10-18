var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  question:{ required: true, type: String},
  option: { required: true, type: Array},
  completed: Date,
  // tags: Array
});

mongoose.model('Poll', PollSchema);
