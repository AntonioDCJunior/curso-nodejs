const chalk = require('chalk')

const nota = 3

if(nota >= 7){
    console.log(chalk.blue.bgWhite('Parabéns você foi aprovado! :)'))
} else {
    console.log(chalk.bgGreen.black.bold('Você precisa fazer a recuperação :('))
}
