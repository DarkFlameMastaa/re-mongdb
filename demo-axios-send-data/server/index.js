var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/geiwaqigehaominger');

var cors = require('cors');
app.use(cors());

var Post = require('./models/model.js');
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

app.post('/posts', function(req, res){
  let lolo=new Post({
    minger:req.body.minger,
    content:req.body.content
  })
  lolo.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  });
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
