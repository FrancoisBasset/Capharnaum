import * as Elements from './elements.js';
import * as Methods from './methods.js';

Elements.urlButton.addEventListener('click', function() {
	Methods.startArticle(`/search?url=${Elements.urlInput.nodeValue}`);
});

Elements.randomButton.addEventListener('click', function() {
	Methods.startArticle('/searchRandom');
});
