function medida() {
  const inputN = document.querySelectorAll("#var");
  const res = document.querySelector(".res");

  const catetoOposto = Number(inputN[0].value)
  const catetoAdjacente = Number(inputN[1].value)

  const hipo = Math.pow(catetoOposto,2) + Math.pow(catetoAdjacente,2) 
  const resultadoFinal = Math.sqrt(hipo).toFixed(2)

  res.innerHTML = `a hipotenusa vai medir ${resultadoFinal}`;
}
