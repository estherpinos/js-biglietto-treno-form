

document.getElementById('genera').addEventListener('click', function(){
  console.log('ciao');
  const nome = document.getElementById('nome').value;
  const km = document.getElementById('km').value;
  const options = document.getElementById('inputGroupSelect01').selectedIndex;
  console.log(nome, km, options);
})




