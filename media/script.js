function media() {
  const inputN = document.querySelectorAll("#var");
  const res = document.querySelector(".res");
  const n1 = Number(inputN[0].value);
  const n2 = Number(inputN[1].value);

  let media = ((n1 + n2) / 2).toFixed(1) ;

  res.innerHTML = `A media entre ${n1} e ${n2} é ${media}`;
}
