function classificarHeroi () {
  
  const nome = document.getElementById('hero-name').value
  const xp = parseInt(document.getElementById('hero-xp').value)
  
  let nivel = '';
  let resultado = '';
  
  
  if (xp <= 1000) {
    nivel = "Ferro";
    resultado = 'O herói ${nome} está no nivel ${nivel}';
  } else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze";
    resultado = 'O herói ${nome} está no nivel ${nivel}'
  }else if (xp >= 2001 && xp <= 5000){
    nivel = "Prata";
    resultado = 'O herói ${nome} está no nivel ${nivel}'
  }else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro";
    resultado = 'O herói ${nome} está no nivel ${nivel}'
  }else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina";
    resultado = 'O herói ${nome} está no nivel ${nivel}'
  }else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente";
    resultado = 'O herói ${nome} está no nivel ${nivel}'
  }else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal";
    resultado = 'O herói ${nome} está no nivel ${nivel}'
  }else if (xp >= 10001){
    nivel = "Radiante";
    resultado = 'O herói ${nome} está no nivel ${nivel}'
  }
  console.log ("O heroi " + nome + " está no nivel " + nivel);

}

