var express = require('express');
var router = express.Router();
var User = require('../models/User');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user
  });
});

router.get('/register', function(req, res) {
  res.render('auth/register');
});
router.get('/register/borrower', function(req, res) {
  res.render('auth/register_borrower');
});

router.get('/profile', function(req, res, next) {
  res.render('profile', {
    user: req.user
  });
});

router.get('/map', function(req, res, next) {
  res.render('map');
});

router.post('/register', function (req, res) {
 User.register(new User({
   username: req.body.username,
   wifiName: req.body.wifiName,
   wifiPass: req.body.wifiPass,
   ipAddress: req.body.ipAddress,
   firstName: req.body.firstName,
   lastName: req.body.lastName,
   bankName: req.body.bankName,
   lender: true,
   bankAcctNum: req.body.bankAcctNum,
   bankRoutingNum: req.body.bankRoutingNum }), req.body.password, function(err, user) {
   if (err) return res.render('auth/register', {user: user});
   passport.authenticate('local')(req, res, function () {
     req.session.save(function (err) {
       if (err) {
         return next(err);
       }
       res.redirect('/profile');
     });
   });
 });
});

router.post('/register/borrower', function (req, res) {
 User.register(new User({
   username: req.body.username,
   firstName: req.body.firstName,
   lastName: req.body.lastName,
   creditCardNum: req.body.creditCardNum,
   creditCardExp: req.body.creditCardExp,
   creditCardCvCode: req.body.creditCardCvCode,
   cardCompany: req.body.cardCompany,
   borrower: true
  }), req.body.password, function(err, user) {
   if (err) return res.render('auth/register_borrower', {user: user});
   passport.authenticate('local')(req, res, function () {
     req.session.save(function (err) {
       if (err) {
         return next(err);
       }
       res.redirect('/profile');
     });
   });
 });
});

router.get('/login', function(req, res) {
  res.render('auth/login', {
    user: req.user
  });
});

router.post('/login', passport.authenticate(
    'local', {
      failureRedirect: '/login'
    }),
  function(req, res, next) {
    req.session.save(function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  }
);

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
});

router.get('/secret', isLoggedIn, function(req,res){
  res.render('secret', {user: req.user});
});

function isLoggedIn(req, res, next) {
  console.log(req.body);
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the login page
  res.redirect('/login');
}

module.exports = router;
