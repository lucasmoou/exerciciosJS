function medida() {
  const inputN = document.querySelectorAll("#var");
  const res = document.querySelector(".res");
  const inputArray = Array.from(inputN)

  const aleatorio = (inputArray[Math.floor(Math.random() * inputArray.length)]).value
  res.innerHTML = `O aluno escolhido foi ${aleatorio}`

}