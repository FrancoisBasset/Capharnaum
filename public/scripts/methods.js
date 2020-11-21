import Article from './classes/Article.js';
import Variables from './variables.js';

function createArticle(url) {
	return fetch(url).then(function(response) {
		return response.json().then(function(article) {
			Variables.article = new Article(
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

		console.log(Variables.article.getChapter([6, 1, 3, 0]));
	});
}

/**
 * 
 * @param {string} word 
 */
function scrambleWord(word) {
	if (word.length == 1) {
		return word;
	}

	var scrambledWord = word[0];
	var center = word.slice(1, word.length - 1).split('');

	while (center.length > 0) {
		const index = Math.floor(Math.random() * center.length);
		scrambledWord += center.splice(index, 1);
	}

	scrambledWord += word[word.length - 1];

	return scrambledWord;
}

/**
 * 
 * @param {string} text 
 */
function scrambleText(text) {
	var scrambledText = '';

	for (const word of text.split(',').join('').split(' ')) {
		scrambledText += scrambleWord(word) + ' ';
	}

	scrambledText = scrambledText.substr(0, scrambledText.length - 1);

	return scrambledText;
}

export default {
	startArticle,
	scrambleWord,
	scrambleText
};