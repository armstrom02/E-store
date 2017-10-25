'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('userp'),
  order = mongoose.model('productcart');



exports.get_all= function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.create_user = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.get_user = function(req, res) {
  Task.findById(req.params.userId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_user = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_user = function(req, res) {


  Task.remove({
    _id: req.params.userId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


exports.create_order = function(req, res) {
  var new_task = new order(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get_order= function(req, res) {
  var user=req.params.uname;
  order.find({uname:user}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

  }; 


exports.delete_order = function(req, res) {
  order.remove({
    pdate: req.params.pdate
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};