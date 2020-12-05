export default class Chapter {
	/**
	 * 
	 * @param {string} title 
	 * @param {Array.<string>} texts 
	 * @param {Array.<Chapter>} children 
	 */
	constructor(title, texts, children) {
		this.title = title;
		this.texts = texts;
		/**
		 * @type {Array.<Chapter>}
		 */
		this.children = children;
	}
};