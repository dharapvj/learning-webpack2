window.addEventListener('load', () => {
	employees.forEach( (emp)  =>{
		var el = document.createElement('li');
		el.innerText=emp.name;
		document.getElementsByTagName('ul')[0].appendChild(el);
	});
})
