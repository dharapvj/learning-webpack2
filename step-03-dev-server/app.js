/* UTILITY FUNCTIONS */
const pushJson = function(classSelector, obj){
	let parent = document.getElementsByClassName(classSelector)[0];
	parent.innerHTML=JSON.stringify(obj,null,2);
};

const loadHTML = function(sectionName) {
	let html = require(`html-loader!./templates/${sectionName}-loading.html`);
	let loadContainer = document.getElementsByClassName(`${sectionName}load`)[0];
	loadContainer.innerHTML = html;
};


// ========================
//  Showcase 1 - JS Loading (and bundling inside bundle.JS)
// ========================
import pick from 'lodash/pick';
// Above is not a tree shaking really.
// Its just a hack provided by lodash for smaller lib size for CommonJS based lib

let iphone = {
	RAM: '8gb',
	retina: true,
	screen: 'touch',
	'lightning': true
};
let mobile = pick(iphone,['RAM', 'screen']);
// console.log( 'iphone: ', iphone, ' mobile: ', mobile);

loadHTML('js');
pushJson('code iphone', iphone);
pushJson('code mobile', mobile);


// ========================
// Showcase 2 - CSS Loading (and bundling inside bundle.JS)
// ========================
import styles from './assets/stylesheets/app.css';
loadHTML('css');

