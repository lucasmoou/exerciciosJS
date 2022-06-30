function medida() {
  const res = document.querySelector(".res");
  const inputN = document.querySelector("#var").value;

  const numeroQuebrado =  Math.round(Number(inputN))

  res.innerHTML = `o numero digitado ${Number(inputN)} e o inteiro é ${numeroQuebrado}`

}