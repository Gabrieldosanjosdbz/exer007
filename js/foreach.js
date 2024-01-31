const numeros = [45, 4, 9, 16, 25]

let text = ""

numeros.forEach(minhaFuncao)

function minhaFuncao(value, index, Array){
    text += value * 2
}

document.getElementById('teste').textContent = text


