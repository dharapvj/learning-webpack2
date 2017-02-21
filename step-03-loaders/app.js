// Show "tree shaking"
// import pick from 'lodash';

import pick from 'lodash/pick';

let src = {
	a: 'a',
	b: 'b',
	c: 'c'
};

let dest = pick(src,['b', 'c']);

console.log( 'src: ', src, ' dest: ', dest);

import styles from './assets/stylesheets/app.css';
import './assets/scss/_container.scss';
