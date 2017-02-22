/*
 Showcase 1 - JS Loading (and bundling inside bundle.JS)
 */
// Show "tree shaking" impact of 
// import pick from 'lodash';
import pick from 'lodash/pick';

let src = {
	a: 'a',
	b: 'b',
	c: 'c'
};
let dest = pick(src,['b', 'c']);
console.log( 'src: ', src, ' dest: ', dest);

/*
 Showcase 2 - CSS Loading (and bundling inside bundle.JS)
 */
import styles from './assets/stylesheets/app.css';

/*
 Showcase 3 - SCSS Loading (and bundling inside bundle.JS)
 */
let addFrnds = (frnds) => {
	let parent = document.getElementById('friends');
	frnds.forEach( (frnd)  =>{
		let el = document.createElement('li');
		el.innerText=`${frnd.name} from ${frnd.location}`;
		parent.appendChild(el);
	});
}
import './assets/scss/_container.scss';
/*
 Showcase 4 - JSON Loading (and bundling inside bundle.JS)
 */
import db from './assets/data/db.json';
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