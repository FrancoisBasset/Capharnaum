import Chapter from './Chapter.js';

export default class Article {
	/**
	 * 
	 * @param {string} title 
	 * @param {string} infobox 
	 * @param {Array.<string>} introduction 
	 * @param {Array.<Chapter>} chapters 
	 */
	constructor(title, infobox, introduction, chapters) {
		this.title = title;
		this.infobox = infobox;
		this.introduction = introduction;
		this.chapters = chapters;
	}

	/**
	 * 
	 * @param {Array} indexes
	 * @returns {Chapter}
	 */
	getChapter(indexes) {
		var chapter = null;

		for (const index of indexes) {
			if (chapter == null) {
				chapter = this.chapters[index];
				continue;
			}

			chapter = chapter.children[index];
		}

		return chapter;
	}
};