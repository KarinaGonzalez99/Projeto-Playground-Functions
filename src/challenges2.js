// Desafio 11
function generatePhoneNumber(number11) {
let contador;
  if(number11.length > 11 || number11.length < 11) {
    return "Array com tamanho incorreto.";
    } 
for (let index in number11) {
    if(number11[index] < 0 || number11[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }   
for (let index2 in number11) {
      if(number11[index] == number11[index2]) {
        contador += 1;
        if(contador >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
}
}      
}
    contador = 0;
}
return "(" + number11[0] + number11[1] + ") " + number11[2] + number11[3] + number11[4] + number11[5] + number11[6] + "-" + number11[7] + number11[8] + number11[9] +number11[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let linha1 = (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC));
  let linha2 = (lineB < lineA + lineC && lineB > Math.abs(lineC - lineA))
  let linha3 = (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA))

  return linha1 && linha2 && linha3
}
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
}
