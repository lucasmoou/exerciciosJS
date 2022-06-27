function medida() {
  const res = document.querySelector(".res");
  const inputN = document.querySelector("#var").value;
  const n = Number(inputN);

  res.innerHTML = `${n} x 1 = ${n * 1} <br>
  ${n} x 2 = ${n * 2} <br>
  ${n} x 3 = ${n * 3} <br>
  ${n} x 4 = ${n * 4} <br>
  ${n} x 5 = ${n * 5} <br>
  ${n} x 6 = ${n * 6} <br>
  ${n} x 7 = ${n * 7} <br>
  ${n} x 8 = ${n * 8} <br>
  ${n} x 9 = ${n * 9} <br>
  ${n} x 10 = ${n * 10} <br>`;
}
