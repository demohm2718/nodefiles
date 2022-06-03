// From Ex.1
//const chalk = require('chalk');
import chalk from 'chalk';
//Ran into an issue using const chalk = require('chalk');
//  SOLUTION: use import instead.

console.log(chalk.red('\nSkilled in the art of soft.'));
//
console.log(chalk.red('\nSkilled in the art of') + chalk.blue(' sofffft.'));
//
const error = chalk.bold.red;
console.log(error('Incorrect file!'));
