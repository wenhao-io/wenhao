var express = require('express');

var app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/category', function(request, response){
    response.sendfile('./public/category.html');
});

app.get('/article',function(request,response){
    response.sendfile('./public/article.html');
});

app.use(function(err, request, response, next){
    console.error(err.stack);
    response.type('text/plain');
    response.status(500);
    response.send('500 - server internal error');
});

app.use(function(request, response){
    response.type('text/plain');
    response.status(404);
    response.send('404 - not found');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'));
});