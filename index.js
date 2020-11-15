const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const utils = require('./utils');
const Article = require('./Article');
const RandomArticle = require('./RandomArticle');

app.use(express.static('./public'));

app.listen(80, function() {
    console.log('Start on 80');
});

app.get('/', function(req, res) {
    res.render('./index.ejs');
});

app.post('/', function(req, res) {
    var article;

    if (req.body.urlButton != undefined) {
        article = new Article(req.body.url)
    } else if (req.body.randomButton != undefined) {
        article = new RandomArticle();
    }

    article.fetch().then(function() {
        res.render('./index.ejs', {article: article});
    });
});