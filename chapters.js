const jsdom = require('jsdom').JSDOM;
const fs = require('fs');
const { JSDOM } = require('jsdom');

var introduction = [];
var chapters = [];

var currentChapter;

var chapterH2 = [];
var chapterH3 = [];
var chapterH4 = [];

var passFirstChapter = false;

const chaptersToRemove = ['Notes et références', 'Annexes'];

jsdom.fromURL('https://fr.wikipedia.org/wiki/Paris').then(function(dom) {
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
                currentChapter.texts.push(element.textContent);
            } else {
                introduction.push(element.textContent);
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
    }

    fs.writeFileSync('./article.html', article.innerHTML);
    fs.writeFileSync('./introduction.json', JSON.stringify(introduction));
    fs.writeFileSync('./chapters.json', JSON.stringify(chapters));
});