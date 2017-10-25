'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var userprofile = new Schema({

name: {
    type: String,
 
  },

email: {
    type: String,
   
  },

mobile: {
    type: Number,
    
  },

dob: {
    type: Date,
    
  },

password: {
    type: String,
    
  },

created_date: {
    type: Date,
    default: Date.now
  },
});



var productcart= new Schema({


pdate: {
    type: Date,
    default: Date.now
  },


uname: {
    type: String
  },

pname: {
    type: String
  },

pprice: {
    type: Number
  },

pquantity: {
    type: Number
  },

purl: {
    type: String
  }  


});



module.exports = mongoose.model('userp', userprofile);
module.exports = mongoose.model('productcart', productcart);
