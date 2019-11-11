var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CabSchema = new Schema(
  {
    driver_name: {type: String},
    driver_number: {type: String},
    cab_number: {type: String},
    cab_type:{type: String},
    createdOn: {type: Date,default:Date.now},
  }
);
module.exports = mongoose.model('Cab', CabSchema);
