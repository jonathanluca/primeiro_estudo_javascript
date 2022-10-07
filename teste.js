//criando variavel

let idade = 18 // tipo inteiro.
let altura = 1.75 // tipo float.
let opcaoUsuario // variavel que nao foi enicializada ou declarada tem o valor de undefined
let nome = "Jonathan" // uma string

function darBoasVindas () {
    console.log(`Olã ${nome}`)
}


darBoasVindas()


function maiorIdade () {
    console.log("voce tem tantos anos")
    if( idade >= 18){
        console.log("esta liberado")
    }
    else {
        console.log("acesse negado")

    }
}
maiorIdade()
