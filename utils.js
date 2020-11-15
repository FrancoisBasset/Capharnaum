const jsdom = require('jsdom').JSDOM;

function getDom(url) {
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

function getContent(dom) {
    var introduction = [];
    var chapters = [];
    var currentChapter = null;
    var chapterH2 = [];
    var chapterH3 = [];
    var chapterH4 = [];
    var chapterH5 = [];
    var chapterH6 = [];
    var passFirstChapter = false;

    const article = dom.window.document.querySelector('.mw-parser-output');
    const elements = article.children;

    for (const element of elements) {
        if (element.tagName == 'P' && element.className != 'mw-empty-elt') {
            for (const sup of element.querySelectorAll('sup, style')) {
                sup.remove();
            }

            element.textContent = element.textContent.split('()').join('');
            element.textContent = element.textContent.split(' ,').join(',');
            element.textContent = element.textContent.split('\n').join('');

            if (passFirstChapter) {
                currentChapter.texts.push({
                    text: element.textContent,
                    words: 0
                });
            } else {
                introduction.push({
                    text: element.textContent,
                    words: 0
                });
            }
        }

        if (element.tagName == 'H2') {
            passFirstChapter = true;

            chapterH2 = {
                title: element.textContent,
                children: [],
                texts: []
            };

            currentChapter = chapterH2;

            chapters.push(chapterH2);
        }

        if (element.tagName == 'H3') {
            chapterH3 = {
                title: element.textContent,
                children: [],
                texts: []
            };

            currentChapter = chapterH3;

            chapterH2.children.push(chapterH3);
        }

        if (element.tagName == 'H4') {
            chapterH4 = {
                title: element.textContent,
                children: [],
                texts: []
            };

            currentChapter = chapterH4;

            chapterH3.children.push(chapterH4);
        }

        if (element.tagName == 'H5') {
            chapterH5 = {
                title: element.textContent,
                children: [],
                texts: []
            };

            currentChapter = chapterH5;

            chapterH4.children.push(chapterH5);
        }

        if (element.tagName == 'H6') {
            chapterH6 = {
                title: element.textContent,
                children: [],
                texts: []
            };

            currentChapter = chapterH6;

            chapterH5.children.push(chapterH6);
        }
    }

    return {
        introduction: introduction,
        chapters: chapters
    };
}

module.exports = {
    getDom: getDom,
    getInfobox: getInfobox,
    getContent: getContent
};