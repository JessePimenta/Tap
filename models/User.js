var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
  wifiName: String,
  wifiPass: String,
  ipAddress: String,
  firstName: String,
  lastName: String,
  bankName: String,
  bankAcctNum: Number,
  bankRoutingNum: Number,
  creditCardNum: Number,
  creditCardExp: Number,
  creditCardCvCode: Number,
  cardCompany: String,
  borrower: Boolean,
  lender: Boolean
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
