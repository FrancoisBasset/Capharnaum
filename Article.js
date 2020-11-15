const utils = require('./utils');

class Article {
    #url;

    constructor(url) {
        this.#url = url;
    }

    fetch() {
        return utils.getDom(this.#url).then(dom => {
            this.infobox = utils.getInfobox(dom);
            const content = utils.getContent(dom);
        
            this.introduction = content.introduction;
            this.chapters = content.chapters;
        });
    }
}

module.exports = Article;