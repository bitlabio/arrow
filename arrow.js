// arrow v0.0.1 beta
// purpose: a mapping tool to connect the economy locally.

var cfg = { name: "arrow", git: "https://github.com/bitlabio/arrow", mongodb: "arrow", mongocollections: ['items'], version: "0.0.1", sec: "cj3829cji23o", sec2:"shd7932dji32o9dn"}
console.log(cfg)


var express = require('express');
var app = express();
var path    = require("path");
var bodyParser = require('body-parser');
var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var mongojs = require('mongojs')
var db = mongojs(cfg.mongodb,cfg.mongocollections)
var cookieParser = require('cookie-parser')
var session = require('cookie-session')
app.use(bodyParser.json());

app.use(session({
  name: 'session',
  keys: [cfg.sec, cfg.sec2],
  secureProxy: false // if you do SSL outside of node
}))

app.use('/', express.static('public')); //index.html default


app.get('/', (req,res) => {
  if (req.session.hash) {
    console.log("LOGGED IN")
    console.log(req.session.hash);
    res.sendFile(path.join(__dirname+'/public/index.html'));
  } else {
    console.log("anon")
    res.sendFile(path.join(__dirname+'/public/index.html'));
  }
  
})


app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/contact.html'));  
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/about.html'));  
})

app.listen(80, function () {
  console.log('Server listening...');
});