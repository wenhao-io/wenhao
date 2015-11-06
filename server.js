var express = require('express');
var mysql = require('mysql');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.get('/index', function (request, response) {
    response.sendFile('index.html', options, function () {
        console.log('visited index');
    });
});

app.get('/category', function (request, response) {
    response.sendFile('category.html', options, function () {
        console.log('visited category');
    });
});

app.get('/category/list', function (request, response) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'wenhao',
        database: 'wenhao'
    });

    connection.connect();

    connection.query('select * from t_blog_list', function (err, rows, fields) {
        if (err) throw err;

        response.type('application/json');
        response.status(200);
        response.send(rows);
    });

    connection.end();
});

app.get('/blog', function (request, response) {
    response.sendFile('blog.html', options, function () {
        console.log('visited blog');
    });
});

app.get('/api/getBlog', function (request, response) {
    var title = request.query.title;

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'wenhao',
        database: 'wenhao'
    });

    connection.connect();

    connection.query("select content from blog where title='" + title + "'", function (err, rows, fields) {
        if (err) throw err;

        response.type('application/json');
        response.status(200);
        response.send(rows[0]['content']);
    });

    connection.end();
});

app.use(function (err, request, response, next) {
    console.error(err.stack);
    response.type('text/plain');
    response.status(500);
    response.send('500 - server internal error');
});

app.use(function (request, response) {
    response.type('text/plain');
    response.status(404);
    response.send('404 - not found');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port'));
});