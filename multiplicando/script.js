function multiplicar() {
  const n = document.querySelector("#var").value;
  const numero = Number(n);
  const res = document.querySelector(".res");

  res.innerHTML = `O dobro de ${numero} é ${numero * 2} <br>
  O triplo de ${numero} é ${numero * 3}<br>
  A raiz quadrada de ${numero} é ${Math.sqrt(numero).toFixed(2)}`;
}
