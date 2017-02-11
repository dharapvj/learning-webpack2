var fs = require('fs');
var chalk = require('chalk');
var path = require('path');
var Chance = require('chance');

var chance = new Chance();
let outputDir = path.resolve('gen/step-00');

let generateFiles = (err) => {
    console.log('generating files');
    if(err){
        console.error(chalk.red(err.message));
        return;
    }
    for(let i = 0 ; i < 200; i++){
        let empName = chance.name();
        let moduleString =
`if(!employees) {
    employees = [];
}
employees.push({
    id:1, name: '${empName}'
});
`;
        fs.writeFile(path.resolve('gen/step-00',`e${i}.js`) ,moduleString, (err) => { if(err) console.error(chalk.red(err.message));});
        // console.log(moduleString);
    }

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

