const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const NodeArticle = require('./classes/NodeArticle');
const NodeRandomArticle = require('./classes/NodeRandomArticle');

app.use(express.static('./public'));

app.listen(80, function() {
    console.log('Start on 80');
});

app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

app.get('/search', function(req, res) {
    const article = new NodeArticle(req.query.url);

    article.fetch().then(function() {
        res.json(article);
    });
});

app.get('/searchRandom', function(req, res) {
    const article = new NodeRandomArticle();
    
    article.fetch().then(function() {
        res.json(article);
    });
})