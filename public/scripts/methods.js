import * as Classes from './classes/index.js';
import Variables from './variables.js';

function createArticle(url) {
    return fetch(url).then(function(response) {
        return response.json().then(function(article) {
            Variables.article = new Classes.Article(
                article.title,
                article.infobox,
                article.introduction,
                article.chapters);
        });
    });
}

function startArticle(url) {
    createArticle(url).then(function() {
        console.log(Variables.article);
    })
}

export {
    startArticle
};