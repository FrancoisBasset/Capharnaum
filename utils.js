const jsdom = require('jsdom').JSDOM;

function getRandomArticle() {
    return getArticle('https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard');
}

function getArticle(url) {
    return jsdom.fromURL(url);
}

function getInfobox(dom) {
    const nodeList = dom.window.document.querySelectorAll('#infobox_v2, .infobox_v2, .infobox_v3');

    if (nodeList.length > 0) {
        const body = nodeList[0];
        body.style.display = 'inline-block';
        
        for (const img of body.getElementsByTagName('img')) {
            img.srcset = img.src;
        }

        const footers = body.querySelectorAll('.navigation-only, .navbar');

        for (const footer of footers) {
            footer.remove();
        }

        const links = body.querySelectorAll('a');
        
        for (var link of links) {
            link.removeAttribute('href');
        }

        return body.outerHTML;
    } else {
        return '';
    }
}

module.exports = {
    getRandomArticle: getRandomArticle,
    getArticle: getArticle,
    getInfobox: getInfobox
};