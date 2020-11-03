const fs = require('fs');
const jsdom = require('jsdom').JSDOM;

jsdom.fromURL('https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard').then(function(dom) {
    console.log(dom.window.location.href);
    const title = dom.window.document.title;
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

        fs.writeFileSync(`./infobox-${title}.html`, body.outerHTML);
    } else {
        console.log(title);
        console.log('Pas d\'infobox');
    }
});