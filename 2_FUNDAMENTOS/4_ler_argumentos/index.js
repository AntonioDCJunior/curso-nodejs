console.log(process.argv)

const args = process.argv.slice(2)

const nome = args[0].split("=")[1]
console.log(nome)

const idade = args[1].split("=")[1]
console.log(idade)

const profissao = args[2].split("=")[1]
console.log(profissao)

console.log("O nome dele é %s sua idade é %s ele é %s", nome, idade, profissao)
console.log(`O nome dele é ${nome} sua idade é ${idade} ele é ${profissao}`)