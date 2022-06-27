function medida() {
  const res = document.querySelector(".res");
  const inputN = document.querySelector("#var").value;
  const n = Number(inputN);

  res.innerHTML = `a medida de ${n} corresponde a <br>
  ${n / 1000} km <br> 
  ${n / 100} hm <br> 
  ${n / 10} dam <br>
  ${n * 10} dm <br>
  ${n * 100} cm <br>
  ${n * 1000} mm`;
}
