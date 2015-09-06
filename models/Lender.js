var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LenderSchema = new Schema({
    email: String,
    password:String,
    bank account: {
      bankName: String,
      acctNumber: Number,
      routingNumber: Number
    },
    wifiNetwork: {
      networkName: String,
      networkPass: String
    }
});

module.exports = mongoose.model('Lender', LenderSchema);
