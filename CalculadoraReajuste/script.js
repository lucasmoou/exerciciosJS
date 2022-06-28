function medida() {
  const inputN = document.querySelector("#var").value;
  const res = document.querySelector(".res");

  let porcentagem = (Number(inputN) * 15) / 100;
  let soma = porcentagem + Number(inputN);

  res.innerHTML = `um funcionario que ganhava ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(inputN))}
  , com aumento de 15% passa a receber ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(soma)}`;
}
