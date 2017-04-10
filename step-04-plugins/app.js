/* UTILITY FUNCTIONS */
const loadHTML = function(sectionName) {
	let html = require(`html-loader!./templates/${sectionName}-loading.html`);
	let loadContainer = document.getElementsByClassName(`${sectionName}load`)[0];
	loadContainer.innerHTML = html;
};

/*
 Showcase 1 - demonstration of ProvidePlugin
*/
import jqueryDepModule from './js/jqueryDependent.module';
new jqueryDepModule();

/*
 Showcase 2 - DefinePlugin demonstration
*/
// Load HTML fragment for this demo.
loadHTML('defPlug');
let definedValues = `Environment is <b>${ENV}</b>. Login Url is <b>${LOGIN_URL}</b>.`;
document.querySelectorAll('.defPlugload .replace')[0].innerHTML = definedValues;
