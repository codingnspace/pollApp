var express = require('express');
var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var router = express.Router();

router.get('/',function(req,res,next){
  Poll.find({}, function(err, result, next){
    if(err) return next(err);
    res.send(result);
  });
});

module.exports = router;
