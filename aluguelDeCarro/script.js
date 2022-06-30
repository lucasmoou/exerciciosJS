function medida() {
  const res = document.querySelector(".res");
  const inputN = document.querySelectorAll("#var");

  const diasAlugados = Number(inputN[0].value);
  const kmRodado = Number(inputN[1].value);


  const diaria = 60
  const km = 0.15

  const total = (diasAlugados * diaria) + (kmRodado * km)

  res.innerHTML = `O total a pagar é ${new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(total)} `
}