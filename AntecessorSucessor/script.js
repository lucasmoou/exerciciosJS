function dissecar() {
  const variavel = Number(document.querySelector("#var").value);
  const res = document.querySelector(".res");

  res.innerHTML = `avaliando seu numero ${variavel}, o antecessor dele é ${
    variavel - 1
  } e o sucessor é ${variavel + 1}`;
}
