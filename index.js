const prompt = require('prompt-sync')();
const funcao = require('./funcoes');
const preDefinido = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20];

console.log('Olá. Digite um número e vou verificar se ele existe no meu Array:');
let numero = prompt();

funcao.busca(numero, preDefinido);