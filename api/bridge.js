var express = require('express'),
app = express(),
port = process.env.PORT || 3200,

cor=require('cors'),

mongoose = require('mongoose'),
Task = require('./model/structure'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mydatabase'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cor());


var routes = require('./routes/routes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });




app.listen(port);

console.log('RESTful API server started on: ' + port);
