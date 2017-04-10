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


/*
 Showcase 3 - Tree Shaking
 */
// Since we only referred "bake" function, shake function is not included in the bundle.
// NOTE: tree-shaking only works when we invoke UglifyJS plugin (default in production environment)
import { bake } from './js/tree-shaking-demo';
bake();

// ===============
// Below loaders are for self-study. Had to comment them off
// to make sure I make use of 1 hr effectively.
// ===============

/*
 Showcase 4 - SCSS Loading (and bundling inside bundle.JS)
 */
/*import './assets/scss/_container.scss';
loadHTML('sass');
*/
/*
 Showcase 5 - JSON Loading (and bundling inside bundle.JS)
 */
/*loadHTML('json');

import db from './assets/data/db.json';
let addFrnds = (frnds) => {
	let parent = document.getElementById('friends');
	frnds.forEach( (frnd)  =>{
		let el = document.createElement('li');
		el.innerText=`${frnd.name} from ${frnd.location}`;
		parent.appendChild(el);
	});
}
addFrnds(db.friends);
*/
/*
 Showcase 6 - Font Loading (but NOT bundling inside bundle.JS)
 */
/*import './assets/scss/_fonts.scss';
import './assets/scss/font-demo.scss';
loadHTML('font');
*/

/*
 Showcase 7 - Typescript loading (and bundling inside bundle.js)
 */
/*import { FriendComponent } from './ts/dummy.ts';
let frndC = new FriendComponent();
addFrnds(frndC.getFriends());
*/
/*
 Showcase 8 - image loading via file-loader.
 */
// Load HTML fragment for this demo.
/*loadHTML('img');
*/