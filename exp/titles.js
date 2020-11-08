const jsdom = require('jsdom').JSDOM;

jsdom.fromURL('https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard').then(function(dom) {
    console.log(dom.window.document.title);
});