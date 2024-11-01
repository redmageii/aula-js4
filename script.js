// const numeros = [4, 5]

//Array
const nomes = ['Fulano', 'Ciclano', 'Caio']

//Seleciona a posição do item no array
// console.log(`Olá, ${nomes[2]}`)


//atualiza o valor do item no array
nomes[0] = 'Beltrano'

//Adiciona elemento ao final do array
nomes.push('fadfas')
console.log(nomes)

//Adiciona elemento ao início do array
nomes.unshift('cnvjadf')

//Remove o último elemento do array
nomes.pop()

//Remove o primeiro elemento
nomes.shift()

//remove um elemento específico
nomes.slice(2, 1)

//verifica se existe um valor no array
nomes.includes('Matheus')

//itera sobre todos os elementos do array

nomes.forEach(function rodarArray(x) {
    console.log(x)
})

//loop que repete com uma condicional
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}


// correspondência de funções
// function somar(numero1, numero2) {
//     return numero1+numero2
// }

//arrow function: permite a criação de funções fantasmas (sem nome) sem a necessidade de declarações de function
// const somar=(numero1, numero2) => {
//     return numero1+numero2
// }

//simplificação
// const somar=((numero1, numero2) => numero1+numero2)
// console.log(somar(1, 2))






// function soma_num(lista_num) {
//     soma = lista_num[0] + lista_num[1]
//     return soma
// }
// alert(`A soma dos números é ${soma_num(numeros)}`)



// const num1 = 3
// const num2 = 4

// function somar(a, b) {

//     let soma = a + b
//     console.log(soma)
//     return soma

// }

// function mostrarResultado() {
//     let resultado=somar(5, 10)
//     console.log(resultado)
//     return resultado
// }

// somar(num1, num2)


//if ternário
// condition?expression1:expression2
//condição if?expressão:expressão else

// [1, 2, 3, 4, 5, 6].forEach(function rodar(num) {
//     num%2==0?console.log(`Par:${num}`):console.log(`Impar:${num}`)
// })

const novosNomes = nomes.map(mudaNomes => {
    return console.log(`Olá, ${mudaNomes}`)
})

lista_num = [3, 4, 5, 2, 6]

lista_num.forEach(function dobrar(numDobrados) {
    return numDobrados.map(x => x * 2)
})
console.log(lista_num)




// const dobrarNum = lista_num.map(num => {
//     return console.log(num * 2)
// })

