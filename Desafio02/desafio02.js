//Variáveis para os números totais de derrotas e vitórias 
let numVictories = 50
let numLoses = 30
//função de cálculo para o resultado total de pontos 
function calculo (num1, num2){
  return (num1 - num2) * 2
}
// resultado do cálculo
let resultado = calculo(numVictories, numLoses)
// array contendo os Valores rankeados
let ranked = [ [10], [20], [50], [80], [90],
             [100] ]
let ranked2;
//Laço para percorrer o array 
for (let i = 0; i < resultado; i++){
  let Nivel = ranked[i]
//estrutura de decisões 
  if ( i <= 10 ){
    ranked2 = "Ferro"
  }else if (i >= 11 && i <= 20){
    ranked2 = "Bronze"
  }else if ( i >= 21 & i <= 50){
    ranked2 = "Prata"
  }else if (i >= 51 && i <= 80){
    ranked2 = "Ouro"
  }else if (i >= 81 && i <= 90){
    ranked2 = "Diamante"
  }else if (i >= 91 && i <= 100){
    ranked2 = "Lendário" 
  }else
    rankes2 = "Imortal"
}

console.log (`O Herói tem de saldo ${resultado} de está no nível de ${ranked2}`)