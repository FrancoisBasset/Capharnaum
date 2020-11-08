const fs = require('fs');
const jsdom = require('jsdom').JSDOM;

jsdom.fromURL('https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard').then(function(dom) {
    const title = dom.window.document.title;
    const body = dom.window.document.body.outerHTML;

    fs.writeFileSync(`./html-${title}.html`, body);
});