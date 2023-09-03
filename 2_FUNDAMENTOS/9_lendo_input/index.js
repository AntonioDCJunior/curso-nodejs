const chalk = require('chalk')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


// readline.question("Qual sua linguagem preferida? ",(language) => {
//     console.log(`A minha linguagem preferida é: ${language}`)
//     readline.close()
// })

readline.question("Qual a sua linguagem preferida? ",(language) => {
    if (language === "Python") {
        console.log(chalk.bgGreen.black.bold("Python não é linguagem!!!"))
    } else {
        console.log(chalk.bgBlue.black.bold(`A minha linguagem preferida é : ${language}`))
    }

    readline.close()
})
