import './events.js';

import * as Methods from './methods.js';

const text = "Commune créée en 1850, unique station thermale d'Île-de-France, avec son lac et son casino, le premier de France en chiffre d'affaires et le seul à moins de cent kilomètres de la capitale, cette ville au caractère résidentiel et commercial affirmé occupe une place à part dans la banlieue nord de Paris";

//const text = "Enghien-les-Bains se situe au débouché méridional de la vallée de Montmorency aujourd'hui largement urbanisée (300 000 habitants), au point où la vallée se resserre entre deux buttes-témoins : la butte d'Orgemont au sud, et la butte portant la ville de Montmorency au nord. Ce resserrement a provoqué la concentration des rus s'échappant de la forêt de Montmorency et des buttes du Parisis pour donner naissance au lac d'Enghien, à l'origine de la commune"

//const text = "La ville est limitrophe de : Montmorency, Deuil-la-Barre, Saint-Gratien et Soisy-sous-Montmorency dans le département du Val-d'Oise et Épinay-sur-Seine en Seine-Saint-Denis";


const words = text.split(',').join('').split(' ');

const scrambledText = Methods.scrambleText(text);

var index = 0;
var countWords = 0;

const textInput = document.getElementById('text');

console.log(scrambledText);

textInput.addEventListener('keyup', function() {
	if (countWords == words.length) {
		console.log('✔✔✔✔ C\'est fini !');
	}

	const typedWord = textInput.value;

	if (typedWord == words[index]) {
		index++;
		countWords++;

		const percent = Math.floor((countWords / words.length) * 100);

		console.log(`✔ Words: ${percent} %`);
		textInput.value = '';
	}
});