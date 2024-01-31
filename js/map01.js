var vencedores = [
    {
        id: 1,
        nome: 'Equipe A',
        pais: 'Brasil'
    },
    {   
        id: 2,
        nome: 'Equipe B',
        pais: 'Itália'
    },
    {   
        id: 3,
        nome: 'Equipe C',
        pais: 'Egito'
    }
];

var pais = vencedores.map((item, indice) => {
    return `${indice}: nome da equipe é ${item.nome} e seu país é ${item.pais} e seu id é: ${item.id}`
})

document.getElementById('p1').textContent += pais;