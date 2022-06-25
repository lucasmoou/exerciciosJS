function somar() {
  const res = document.querySelector(".res");
  const n1 = document.querySelector("#n1").value;
  const n2 = document.querySelector("#n2").value;

  const calculo = Number(n1) + Number(n2);

  res.innerHTML = `O resultado é ${calculo}`;
}
