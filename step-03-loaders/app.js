/*
 Showcase 1 - JS Loading (and bundling inside bundle.JS)
 */
// Show "tree shaking" impact of 
// import pick from 'lodash';
import pick from 'lodash/pick';

let iphone = {
	RAM: '8gb',
	retina: true,
	screen: 'touch',
	'lightning': true
};
let mobile = pick(iphone,['RAM', 'screen']);
// console.log( 'iphone: ', iphone, ' mobile: ', mobile);

// Load HTML fragment for this demo.
let jsLoadHtml = require('html-loader!./templates/js-loading.html');
let jsLoadCont = document.getElementsByClassName('jsload')[0];
jsLoadCont.innerHTML = jsLoadHtml;

// load JS loaded content into it
let iphoneSpan = document.getElementsByClassName('code iphone')[0];
iphoneSpan.innerHTML=JSON.stringify(iphone,null,2);
let mobSpan = document.getElementsByClassName('code mobile')[0];
mobSpan.innerHTML=JSON.stringify(mobile,null,2);


/*
 Showcase 2 - CSS Loading (and bundling inside bundle.JS)
 */
import styles from './assets/stylesheets/app.css';
// Load HTML fragment for this demo.
let cssLoadHtml = require('html-loader!./templates/css-loading.html');
let cssLoadCont = document.getElementsByClassName('cssload')[0];
cssLoadCont.innerHTML = cssLoadHtml;


/*
 Showcase 3 - SCSS Loading (and bundling inside bundle.JS)
 */
import './assets/scss/_container.scss';

// Load HTML fragment for this demo.
let sassLoadHtml = require('html-loader!./templates/sass-loading.html');
let sassLoadCont = document.getElementsByClassName('sassload')[0];
sassLoadCont.innerHTML = sassLoadHtml;

/*
 Showcase 4 - JSON Loading (and bundling inside bundle.JS)
 */
// Load HTML fragment for this demo.
let jsonLoadHtml = require('html-loader!./templates/json-loading.html');
let jsonLoadCont = document.getElementsByClassName('jsonload')[0];
jsonLoadCont.innerHTML = jsonLoadHtml;

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

/*
 Showcase 5 - Font Loading (but NOT bundling inside bundle.JS)
 */
import './assets/scss/_fonts.scss';
import './assets/scss/font-demo.scss';
// Load HTML fragment for this demo.
let fontLoadHtml = require('html-loader!./templates/font-loading.html');
let fontLoadCont = document.getElementsByClassName('fontload')[0];
fontLoadCont.innerHTML = fontLoadHtml;

/*
 Showcase 6 - Typescript loading (and bundling inside bundle.js)
 */
import { FriendComponent } from './ts/dummy.ts';
let frndC = new FriendComponent();
addFrnds(frndC.getFriends());

/*
 Showcase 7 - image loading via file-loader.
*/
// Load HTML fragment for this demo.
let imgLoadHtml = require('html-loader!./templates/img-loading.html');
let imgLoadCont = document.getElementsByClassName('imgload')[0];
imgLoadCont.innerHTML = imgLoadHtml;
