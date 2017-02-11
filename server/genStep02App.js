var fs = require('fs');
var chalk = require('chalk');
var path = require('path');
var Chance = require('chance');

var chance = new Chance();
let outputDir = path.resolve('gen/step-02');

let generateFiles = (err) => {
    console.log('generating files');
    if(err){
        console.error(chalk.red(err.message));
        return;
    }
    fs.unlinkSync(path.resolve('gen/step-02',`app.js`));
    let moduleString = 'import { ';
    for(let i = 0 ; i < 200; i++){
        moduleString += `addEmp${i}, `;
        // console.log(moduleString);
    }
    moduleString += '} from \'./modules\';';
    moduleString+=
`
let empList = [];
`
    for(let i = 0 ; i < 200; i++){
        moduleString += 
`
empList = addEmp${i}(empList);`;
    }
    moduleString +=
`
empList.forEach( (emp)  =>{
	var el = document.createElement('li');
	el.innerText=emp.name;
	document.body.appendChild(el);
});

`
    fs.appendFile(path.resolve('gen/step-02',`app.js`) ,moduleString, (err) => { if(err) console.error(chalk.red(err.message));});

};

fs.access(outputDir, (err) => {
    if(err) {
        console.error(chalk.red(err.message));
        fs.mkdir(outputDir, generateFiles);
        // return;
    }else {
        // folder exists - generate the files
        generateFiles();
    }
});

