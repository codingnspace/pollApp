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

router.post('/', function(req,res,next){
  var poll = new Poll(req.body);
  // poll.created = new Date();
  poll.completed = null;
  poll.save(function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

router.put('/',function(req,res,next){
   var result = new Poll(req.body);
   result.option.count++;
  // Poll.update({$set: {option: req.newResult.option.count}},
  result.save(
  function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

router.param('id', function(req,res,next,id){
  Poll.findOne({_id:id}, function(err, result){
    if(err) return next(err);
    if(!result) return next({err: "couldnt find that"});
    req.poll = result;
    next();
  });
});

router.get('/:id', function(req,res,next){
  res.send(req.poll);
});
module.exports = router;
