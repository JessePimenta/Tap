var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LenderSchema = new Schema({
    email: String,
    password:String,
    bankAccount:{
      bankName: String,
      acctNumber: Number,
      routingNumber: Number
    },
    wifiNetwork:{
      networkName: String,
      networkPass: String
    }
});

module.exports = mongoose.model('Lender', LenderSchema);
