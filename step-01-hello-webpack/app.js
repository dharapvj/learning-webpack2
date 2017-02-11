import employees from './employees';

let empList = employees();
empList.forEach( (emp)  =>{
	var el = document.createElement('li');
	el.innerText=emp.name;
	document.body.appendChild(el);
});
