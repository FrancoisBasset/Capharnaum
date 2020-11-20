import './events.js';

import Variables from './variables.js';
import * as Methods from './methods.js';
import * as Elements from './elements.js';

Variables.text = "Commune créée en 1850, unique station thermale d'Île-de-France, avec son lac et son casino, le premier de France en chiffre d'affaires et le seul à moins de cent kilomètres de la capitale, cette ville au caractère résidentiel et commercial affirmé occupe une place à part dans la banlieue nord de Paris";
//Variables.text = "Enghien-les-Bains se situe au débouché méridional de la vallée de Montmorency aujourd'hui largement urbanisée (300 000 habitants), au point où la vallée se resserre entre deux buttes-témoins : la butte d'Orgemont au sud, et la butte portant la ville de Montmorency au nord. Ce resserrement a provoqué la concentration des rus s'échappant de la forêt de Montmorency et des buttes du Parisis pour donner naissance au lac d'Enghien, à l'origine de la commune";
//Variables.text = "La ville est limitrophe de : Montmorency, Deuil-la-Barre, Saint-Gratien et Soisy-sous-Montmorency dans le département du Val-d'Oise et Épinay-sur-Seine en Seine-Saint-Denis";

Variables.words = Variables.text.split(',').join('').split(' ');

Variables.scrambledText = Methods.scrambleText(Variables.text);

console.log(Variables.scrambledText);

Elements.textInput.addEventListener('keyup', function() {
	if (Variables.index + 1 == Variables.words.length) {
		console.log('✔✔✔✔ C\'est fini !');
	}

	if (Elements.textInput.value == Variables.words[Variables.index]) {
		Variables.index++;

		console.log(`✔ Words: ${Math.floor(((Variables.index + 1) / Variables.words.length) * 100)} %`);

		Elements.textInput.value = '';
	}
});