const fs = require("fs")

console.log((process.hrtime()[0]/60).toFixed(5))

const dados = fs.readFile('archive.txt', (err, data) => {
    if(err){
        console.error('fs nao leu o arquivo')
    }

    conteudo = data
})

console.log(dados)
console.log((process.hrtime()[0]/60).toFixed(5))