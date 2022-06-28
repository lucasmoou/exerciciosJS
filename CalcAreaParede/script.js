function medida() {
  const inputN = document.querySelectorAll("#var");
  const res = document.querySelector(".res");
  const v_Largura = Number(inputN[0].value);
  const v_Altura = Number(inputN[1].value);

  let media = v_Largura * v_Altura ;

  res.innerHTML = `sua parede tem dimensão ${v_Largura}x${v_Altura} e sua area é ${media}m²<br>
  Para pintar sua parede, você precisará de ${media / 2}L de tinta`
}
