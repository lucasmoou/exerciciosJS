function medida() {
  const res = document.querySelector(".res");
  const inputN = document.querySelector("#var").value;
  const dol = 5.21;
  const n = inputN / dol;

  res.innerHTML = `${new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL",}).format(inputN)} Reais são ${new Intl.NumberFormat("en", {style: "currency", currency: "USD",}).format(n)} Dolares `;
}
