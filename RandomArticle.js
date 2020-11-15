const Article = require('./Article');

class RandomArticle extends Article {
    constructor() {
        super('https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard');
    }
}

module.exports = RandomArticle;