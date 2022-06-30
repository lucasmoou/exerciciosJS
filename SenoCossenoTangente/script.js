function medida() {
  const inputN = document.querySelector("#var").value;
  const res = document.querySelector(".res");

  const seno = Math.sin(inputN * Math.PI/180).toFixed(2);
  const cosseno = Math.cos(inputN * Math.PI/180).toFixed(2);
  const tangente = Math.tan(inputN * Math.PI/180).toFixed(2);


  res.innerHTML = `O ângulo ${inputN} tem o SENO de ${seno} <br> 
  O ângulo ${inputN} tem o COSSENO de ${cosseno} <br>
  O ângulo ${inputN} tem a TANGENTE de ${tangente}` 
}
