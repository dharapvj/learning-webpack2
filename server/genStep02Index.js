var fs = require('fs');
var chalk = require('chalk');
var path = require('path');
let outputDir = path.resolve('gen/step-02');

let generateFiles = (err) => {
    console.log('generating files');
    if(err){
        console.error(chalk.red(err.message));
        return;
    }
    fs.unlink(path.resolve('gen/step-02',`index.js`), (err) => {});
    for(let i = 0 ; i < 200; i++){
        let moduleString =
`export * from './e${i}';
`;
        fs.appendFile(path.resolve('gen/step-02',`index.js`) ,moduleString, (err) => { if(err) console.error(chalk.red(err.message));});
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

