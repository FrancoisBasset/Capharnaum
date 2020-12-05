import Article from './classes/Article.js';
import Variables from './variables.js';

function m_createArticle(url) {
	return fetch(url).then(function(response) {
		return response.json().then(function(article) {
			Variables.v_article = new Article(
				article.title,
				article.infobox,
				article.introduction,
				article.chapters);
		});
	});
}

function m_showChaptersTree() {
	const chapters = document.getElementById('chapters');
	var index = 0;

	chapters.innerHTML = '';

	for (const chapter of Variables.v_article.chapters) {
		chapters.innerHTML += `<div>`;
		chapters.innerHTML += `<button id="<button class="chapter" data-chapterindexes="${index}">${index + 1} ${chapter.title}</button>`;
		chapters.innerHTML += '</div>';

		index++;
	}
}

function m_selectChapter(chapterIndexes) {
	var indexes = chapterIndexes;
	indexes = indexes.split(',');
	console.log(Variables.v_article.getChapter(indexes));
}

function m_startArticle(url) {
	createArticle(url).then(function() {
		showChaptersTree();
	});
}

/**
 * 
 * @param {string} word 
 */
function m_scrambleWord(word) {
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
function m_scrambleText(text) {
	var scrambledText = '';

	for (const word of text.split(',').join('').split(' ')) {
		scrambledText += m_scrambleWord(word) + ' ';
	}

	scrambledText = scrambledText.substr(0, scrambledText.length - 1);

	return scrambledText;
}

export default {
	m_startArticle,
	m_scrambleWord,
	m_scrambleText,
	m_selectChapter
};