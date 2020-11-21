import './events.js';

import Variables from './variables.js';
import Methods from './methods.js';
import Elements from './elements.js';

Variables.text = 'Paris est la ville la plus peuplée et la capitale de la France';
Variables.words = Variables.text.split(',').join('').split(' ');
Variables.scrambledText = Methods.scrambleText(Variables.text);

console.log(Variables.scrambledText);

Elements.textInput.addEventListener('keyup', function() {
	if (Variables.index == Variables.words.length) {
		console.log('✔✔✔✔ C\'est fini !');
	}

	if (Elements.textInput.value == Variables.words[Variables.index]) {
		console.log(`✔ Words: ${Math.floor(((Variables.index + 1) / Variables.words.length) * 100)} %`);

		Variables.index++;

		Elements.textInput.value = '';
	}
});