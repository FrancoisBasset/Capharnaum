const express = require('express');
const app = express();

const utils = require('./utils');

app.use(express.static('./public'));

app.listen(80, function() {
    console.log('Start on 80');
});

app.get('/', function(req, res) {
    utils.getRandomArticle().then(dom => {
        const infobox = utils.getInfobox(dom);

        res.render('./index.ejs', {infobox: infobox});
    });    
});