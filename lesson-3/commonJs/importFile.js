const exportedData = require('./exportFile');
const chalk = require('chalk');

console.log(chalk.cyanBright.bgGreen(exportedData.firstNum))
console.log(chalk.green(exportedData.str))
console.log(chalk.yellow(exportedData.add(exportedData.firstNum, exportedData.secondNum)))
console.log(chalk.red(exportedData.subtract(exportedData.firstNum, exportedData.secondNum)))
console.log(chalk.magenta(exportedData.secondNum))