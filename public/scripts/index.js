import './events.js';

import Variables from './variables.js';
import Methods from './methods.js';
import Elements from './elements.js';

Variables.v_text = 'Paris est la ville la plus peuplée et la capitale de la France';
Variables.v_words = Variables.v_text.split(',').join('').split(' ');
Variables.v_scrambledText = Methods.m_scrambleText(Variables.v_text);

console.log(Variables.v_scrambledText);

Elements.e_textInput.addEventListener('keyup', function() {
	if (Variables.v_index == Variables.v_words.length) {
		console.log('✔✔✔✔ C\'est fini !');
	}

	if (Elements.e_textInput.value == Variables.v_words[Variables.v_index]) {
		console.log(`✔ Words: ${Math.floor(((Variables.v_index + 1) / Variables.v_words.length) * 100)} %`);

		Variables.v_index++;

		Elements.e_textInput.value = '';
	}
});