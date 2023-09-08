


document.getElementById('genera').addEventListener('click', function(){

  // PRICES
  // let price = 0.21 * kilometers; 
  // let discountChild = price * 0.2;
  // let discountAdult = price * 0.4;
  // if (age<18) price = price - discountChild;
  // if (age>65) price = price - discountAdult;

  // CONSTS

  const nome = document.getElementById('nome').value;
  const km = document.getElementById('km').value;
  const options = document.getElementById('inputGroupSelect01').selectedIndex;
  console.log(nome, km, options);

  // NOME PASSEGGERO
  document.getElementById('nome-passeggero').innerHTML = nome;

  // OFFERTA
  if(options == 1){
    document.getElementById('offerta').innerHTML = 'Biglietto ridotto';
  }
  if(options == 2){
    document.getElementById('offerta').innerHTML = 'Biglietto Standard';
  }
  if(options == 3){
    document.getElementById('offerta').innerHTML = 'Biglietto Silver';
  }

  // CARROZZA
  const numero = Math.floor(Math.random() *20)+1;
  console.log(numero);

  document.getElementById('carrozza').innerHTML = numero;












})






