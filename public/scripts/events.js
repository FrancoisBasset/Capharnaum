import Elements from './elements.js';
import Methods from './methods.js';

Elements.e_urlButton.addEventListener('click', function() {
	Methods.m_startArticle(`/search?url=${Elements.e_urlInput.value}`);
});

Elements.e_randomButton.addEventListener('click', function() {
	Methods.m_startArticle('/searchRandom');
});

document.getElementById('chapters').addEventListener('click', function(e) {
	const indexes = e.target.dataset.chapterindexes;

	if (indexes != null) {
		Methods.m_selectChapter(indexes);
	}
});