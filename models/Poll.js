var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  question:{ required: true, type: String},
  options: { required: true, type: Array},
  created: Date,
  tags: {type: Array},
});

mongoose.model('Poll', PollSchema);
