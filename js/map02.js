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

var dados = vencedores.map((item, indice) => {
    return `<tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.pais}</td>
                
            </tr>
            `;
})

document.getElementById('corpo').innerHTML+= dados.join("");
