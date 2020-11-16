const NodeArticle = require('./NodeArticle');

class NodeRandomArticle extends NodeArticle {
	constructor() {
		super('https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard');
	}
}

module.exports = NodeRandomArticle;