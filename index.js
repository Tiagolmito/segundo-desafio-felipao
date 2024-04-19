
function calcularRanking(vitorias, derrotas){
    let vitorias = 546
    let derrotas = 435
    let saldo = vitorias - derrotas
   
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

}
console.log("o Herói tem salde de " + saldo + " e está no nivel " + nivel)

let vitorias = 549
let derrotas = 423
calcularRanking(vitorias, derrotas)

