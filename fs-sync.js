const fs = require("fs")

console.log((process.hrtime()[0]/60).toFixed(5))
console.log("antes de ler o arquivo")

const dados = fs.readFileSync("file.txt")

console.log( dados + "após ler o arquivo")

console.log((process.hrtime()[0]/60).toFixed(5))