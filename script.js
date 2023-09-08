
// ANNULLA
document.getElementById('annulla').addEventListener('click', function(){

  document.querySelector('.biglietto').classList.add('d-none');
})

document.getElementById('genera').addEventListener('click', function(){

  document.querySelector('.biglietto').classList.remove('d-none');

  // CONSTS

  const nome = document.getElementById('nome').value;
  const km = document.getElementById('km').value;
  //CONTROLLO KM
  if(isNaN(km)){
    alert('Il campo km deve essere un numero');
    document.querySelector('.biglietto').classList.add('d-none');

  }
  const options = document.getElementById('inputGroupSelect01').selectedIndex;
  

  // NOME PASSEGGERO
  document.getElementById('nome-passeggero').innerHTML = nome;

  // OFFERTA E CALCOLO PREZZO
  let price = 0.21 * km; 

  if(options == 0){
    alert('Scegliere una fascia d\'età');
    document.querySelector('.biglietto').classList.add('d-none');
  }

  if(options == 1){
    document.getElementById('offerta').innerHTML = 'Biglietto ridotto';
    price = price * 0.8;
  }
  if(options == 2){
    document.getElementById('offerta').innerHTML = 'Biglietto Standard';
  }
  if(options == 3){
    document.getElementById('offerta').innerHTML = 'Biglietto Silver';
    price = price * 0.6;
  }

  // CARROZZA
  const numero = Math.floor(Math.random() *20)+1;

  document.getElementById('carrozza').innerHTML = numero;

  // CODICE
   const codice = Math.floor(Math.random() *99000)+10000;

   document.getElementById('codice').innerHTML = codice;

  // COSTO

  document.getElementById('costo').innerHTML = price.toFixed(2)+'€';














})






