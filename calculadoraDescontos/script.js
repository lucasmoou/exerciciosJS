function medida() {
  const inputN = document.querySelector("#var").value;
  const res = document.querySelector(".res");

  let porcentagem = (Number(inputN) * 5) / 100;
  let resultado = Number(inputN) - porcentagem;

  res.innerHTML = `Total do desconto de 5% é ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(porcentagem)} <br> 
  Valor final com desconto ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(resultado)}`;
}
