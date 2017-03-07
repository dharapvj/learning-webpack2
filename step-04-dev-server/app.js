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
let lodashCont = document.getElementById('lodash');
let lodashEl = document.createElement('div');
lodashEl.innerHTML=`Original Object <span class='code'>${JSON.stringify(iphone)}</span>. <br>"Pick"ed Object <span class='code'>${JSON.stringify(mobile)}</span>`;
lodashCont.appendChild(lodashEl);

/*
 Showcase 2 - CSS Loading (and bundling inside bundle.JS)
 */
import styles from './assets/stylesheets/app.css';

/*
 Showcase 3 - SCSS Loading (and bundling inside bundle.JS)
 */
import './assets/scss/_container.scss';
/*
 Showcase 4 - JSON Loading (and bundling inside bundle.JS)
 */
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
/*
 Showcase 7 - Typescript loading (and bundling inside bundle.js)
 */
import { FriendComponent } from './ts/dummy.ts';
let frndC = new FriendComponent();
addFrnds(frndC.getFriends());