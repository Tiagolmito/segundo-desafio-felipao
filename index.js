let vitorias = 876
let derrotas = 775
let resultado = calcularRanking(vitorias, derrotas)

function calcularRanking(vitorias, derrotas){
    let saldo = vitorias - derrotas
    let nivel

    if(vitorias < 10){
        nivel = "Ferro"
    } else if(vitorias>= 10 && vitorias <=20){
        nivel = "Bronze"
    } else if(vitorias >= 21 && vitorias <= 50){
        nivel = "Prata"
    } else if(vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    } else if(vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"
    } else if(vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    } 
    console.log("O Héroi tem saldo de " + saldo + " está no nivel de " + nivel)
    return saldo
}

