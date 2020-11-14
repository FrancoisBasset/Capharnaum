const express = require('express');
const app = express();

const utils = require('./utils');
const Article = require('./Article');

app.use(express.static('./public'));

app.listen(80, function() {
    console.log('Start on 80');
});

app.get('/', function(req, res) {
    utils.getRandomArticle().then(dom => {
        const c = utils.getChapters(dom).chapters;
        const intro = utils.getChapters(dom).introduction;

        res.render('./index.ejs', {introduction: intro, chapters: c});
    });    
});

Article.getRandom