var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var mongodbUri = require('mongodb-uri');
var mongolabsUri =   'mongodb://jesseP:packers1@apollo.modulusmongo.net:27017/yri3Rery';


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
  lender: Boolean,
  latitude: Number,
  longitude: Number
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
