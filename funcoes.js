let execucao = 0;
let contem = 0;
let naoContem = 0;

function busca (num, preDefinido) {
    for (let i = 0; i < preDefinido.length; i++) {
        execucao = execucao + 1;
        if (num == preDefinido[i]) {
            contem = contem + 1;
        } else {
            naoContem = naoContem + 1;
        }
    }
    console.log(contem)
    console.log(naoContem)

    if (contem != 0) {
        console.log('O número está no meu array.');
        console.log('A busca foi executada', execucao, 'vezes.');
    } else {
        console.log('O número não foi encontrado.');
    }
};

module.exports = {
    busca
};