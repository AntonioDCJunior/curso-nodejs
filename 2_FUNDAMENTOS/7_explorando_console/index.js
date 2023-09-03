//mais de um valor
const x = 10
const y = 'João'
const w = 'Programador'
const z = [1, 2]


console.log(x, y, z, w)

//contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variável string
console.log("O nome é %s, ele é %s", y, w)

setTimeout(() => {
    console.clear()    
},2000)