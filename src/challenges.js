// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true){
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, altura) {
  return ((base * altura) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return arrayString.pop() + (', ') + arrayString.shift();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
 
}

// Desafio 6
function highestCount(maiorIgual) {
  let maior = maiorIgual[0];

  for(let index = 0; index < maiorIgual.length; index += 1){
    if (maiorIgual[index] > maior){
      maior = maiorIgual[index];
    }
  }
  let contador = 0;
  for (let index = 0; index < maiorIgual.length; index += 1){
    if(maiorIgual[index] === maior){
      contador += 1
    }
  }
  return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(mouse-cat1);
  let cat2Dist = Math.abs(mouse-cat2);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  else if (cat1Dist > cat2Dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayDeNumero) {
  let result = [];
  for(let index of arrayDeNumero) {
    if(index % 3 === 0 && index % 5 != 0) {
      result.push('fizz');
    }
    else if(index % 5 === 0 && index % 3 != 0) {
      result.push('buzz');
    }
    else if(index % 3 === 0 && index % 5 === 0) {
      result.push('fizzBuzz')
    }
    else {
      result.push('bug!')
    }
  }
  return result;
}

// Desafio 9
function encode(vogaisNumeros) {
vogaisNumeros = vogaisNumeros.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i','3').replaceAll('o', '4').replaceAll('u', '5');
return vogaisNumeros;
}
function decode(vogaisNumeros) {
  vogaisNumeros = vogaisNumeros.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3','i').replaceAll('4', 'o').replaceAll('5', 'u');
return vogaisNumeros;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
}
