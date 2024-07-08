function busca (num) {
    for (let i = 0; i < preDefinido; i++) {
        let execucao = execucao + 1;
        if (num == preDefinido[i]) {
            console.log('O número informado está no meu Array.');
        } else {
            console.log('Número não encontrado.');
        }
    }
};

module.exports = {
    busca
};