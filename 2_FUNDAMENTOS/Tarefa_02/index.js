const chalk = require('chalk');
const inquirer = require("inquirer")

inquirer.prompt([
    {
    name: 'n1',
    message: "Qual o seu nome? ",
    },
    {
    name: 'id',
    message: "Qual sua idade? ",
    },
])
.then((answers) => {
    const resposta = (`O nome do usuário é ${answers.n1} e sua idade é ${answers.id} anos`)
    console.log(chalk.bgYellow.black(resposta))
})
.catch((err) => {
    console.log(`Error ${err}`)
})