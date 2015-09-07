var express    = require("express");
var morgan     = require("morgan");
var bodyParser = require("body-parser");
var jwt        = require("jsonwebtoken");
var mongoose   = require("mongoose");
var app        = express();


/// APP MIDDLEWARE ///
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

/////POST REQUEST FOR LENDER AUTH////
app.post('/authenticate', function(req, res) {
    Lender.findOne({email: req.body.email, password: req.body.password}, function(err, lender) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (lender) {
               res.json({
                    type: true,
                    data: lender,
                    token: lender.token
                });
            } else {
                res.json({
                    type: false,
                    data: "Incorrect email/password"
                });
            }
        }
    });
});
/// POST REQ FOR LENDER SIGNIN ///
app.post('/signup', function(req, res) {
    Lender.findOne({email: req.body.email, password: req.body.password}, function(err, lender) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (lender) {
                res.json({
                    type: false,
                    data: "User already exists!"
                });
            } else {
                var lenderModel = new Lender();
                lenderModel.email = req.body.email;
                lenderModel.password = req.body.password;
                lenderModel.save(function(err, lender) {
                    lender.token = jwt.sign(lender, process.env.JWT_SECRET);
                    lender.save(function(err, lender1) {
                        res.json({
                            type: true,
                            data: lender1,
                            token: lender1.token
                        });
                    });
                })
            }
        }
    });
});
/// show page for profile

app.get('/profile', ensureAuthorized, function(req, res) {
    Lender.findOne({token: req.token}, function(err, lender) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            res.json({
                type: true,
                data: lender
            });
        }
    });
});
 /// callback function for the profile show page to make sure user is authorized before viewing profile
function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

/// will print app error in console
process.on('uncaughtException', function(err) {
    console.log(err);
});

/// CONNECT TO PORT 3000 AND ACCESS LENDER MODEL
var port = process.env.PORT || 3000;
var Lender     = require('./models/Lender');

// Connect to DB
// mongoose.connect(process.env.MONGO_URL);
mongoose.connect('mongodb://jesseP:packers1@ds035673.mongolab.com:35673/tap')


process.on('uncaughtException', function(err) {
    console.log(err);
});
