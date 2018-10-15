var express = require('express');

var app = express();

app.set('view engine', 'pug');

var _angular = app.route('/Angular');
var _node    = app.route('/Node');

_angular.get(function(req, res){
    res.send('HELLO ANGULAR!!');
});

_node.get(function(req, res){
    res.send('HELLO NODE!!');
});

app.get('/', function(req, res) {
    res.render('index', {
        title : 'TESTING NODE',
        message : "HELLO WORLD!!"
    });
})

var server = app.listen(3000, function () {
    console.log("LISTENING ON PORT 3000");
});