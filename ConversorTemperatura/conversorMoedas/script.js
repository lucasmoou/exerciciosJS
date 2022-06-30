function medida() {
  const res = document.querySelector(".res");
  const inputN = document.querySelector("#var").value;

  let conversor = (Number(inputN) * 9 / 5 ) + 32


  res.innerHTML = `A temperatura de ${Number(inputN)}°C corresponde a ${conversor}°F`
}
