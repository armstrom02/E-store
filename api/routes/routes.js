'use strict';
module.exports = function(app) {
  var call= require('../controller/controller');

  // todoList Routes
  app.route('/user')
    .get(call.get_all)
    .post(call.create_user);


  app.route('/user/:userId')
    .get(call.get_user)
    .put(call.update_user)
    .delete(call.delete_user);

  app.route('/cart')
    .get(call.get_order)
    .post(call.create_order);  


 app.route('/carts/:uname')
    .get(call.get_order)
    .post(call.create_order);


 app.route('/carts/:pdate')
    .delete(call.delete_order);

};