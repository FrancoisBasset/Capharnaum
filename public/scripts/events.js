import Elements from './elements.js';
import Methods from './methods.js';

Elements.urlButton.addEventListener('click', function() {
	Methods.startArticle(`/search?url=${Elements.urlInput.value}`);
});

Elements.randomButton.addEventListener('click', function() {
	Methods.startArticle('/searchRandom');
});

document.getElementById('chapters').addEventListener('click', function(e) {
	const indexes = e.target.dataset.chapterindexes;

	if (indexes != null) {
		Methods.selectChapter(indexes);
	}
});