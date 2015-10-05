var express = require('express');

var app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

/*
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('wenhao running');
});
*/

app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('about page!');
});

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - server internal error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'));
});