var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/register', function(req,res,next){
  var user = new User(req.body);
user.setPassword(req.password);
  user.save(function(err,result){
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user");
    res.send(result);
  });
});

module.exports = router;
